// three/GalaxyScene.jsx

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GalaxyScene({ canvasRef, active }) {
  const rendererRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !active) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000008, 1);
    renderer.setSize(canvas.parentElement.offsetWidth, canvas.parentElement.offsetHeight);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      canvas.parentElement.offsetWidth / canvas.parentElement.offsetHeight,
      0.1,
      600
    );
    camera.position.set(0, 22, 32);
    camera.lookAt(0, 0, 0);

    /* Galaxy parameters */
    const COUNT = 22000;
    const BRANCHES = 4;
    const SPIN = 1.4;
    const SPREAD = 0.4;

    const pos = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);

    const innerC = new THREE.Color(0x00ffff);
    const outerC = new THREE.Color(0xff6b00);

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      const radius = Math.pow(Math.random(), 0.6) * 28;
      const branch = ((i % BRANCHES) / BRANCHES) * Math.PI * 2;
      const spin = radius * SPIN;

      const rx =
        Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * SPREAD * radius * 0.5;
      const ry =
        Math.pow(Math.random(), 4) * (Math.random() < 0.5 ? 1 : -1) * SPREAD * 0.5;
      const rz =
        Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * SPREAD * radius * 0.5;

      pos[i3] = Math.cos(branch + spin) * radius + rx;
      pos[i3 + 1] = ry;
      pos[i3 + 2] = Math.sin(branch + spin) * radius + rz;

      const mc = new THREE.Color();
      mc.lerpColors(innerC, outerC, radius / 28);
      colors[i3] = mc.r;
      colors[i3 + 1] = mc.g;
      colors[i3 + 2] = mc.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const galaxy = new THREE.Points(geo, mat);
    scene.add(galaxy);

    // Central glow (fake black hole)
    const glowGeo = new THREE.SphereGeometry(0.8, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.9,
    });
    scene.add(new THREE.Mesh(glowGeo, glowMat));
    const haloGeo = new THREE.SphereGeometry(1.5, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x00aaff,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(haloGeo, haloMat));

    // Background stars
    const bgStars = 3000;
    const bgPos = new Float32Array(bgStars * 3);
    for (let i = 0; i < bgStars; i++) {
      bgPos[i * 3] = (Math.random() - 0.5) * 600;
      bgPos[i * 3 + 1] = (Math.random() - 0.5) * 600;
      bgPos[i * 3 + 2] = (Math.random() - 0.5) * 600;
    }
    const bgGeo = new THREE.BufferGeometry();
    bgGeo.setAttribute("position", new THREE.BufferAttribute(bgPos, 3));
    scene.add(
      new THREE.Points(
        bgGeo,
        new THREE.PointsMaterial({ color: 0xffffff, size: 0.4, transparent: true, opacity: 0.5 })
      )
    );

    let mX = 0,
      mY = 0,
      isDragging = false,
      lastX = 0,
      lastY = 0,
      rotY = 0,
      rotX = 0.3;

    const onDown = (e) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onUp = () => {
      isDragging = false;
    };
    const onMouse = (e) => {
      if (isDragging) {
        rotY += (e.clientX - lastX) * 0.005;
        rotX += (e.clientY - lastY) * 0.003;
        rotX = Math.max(-0.8, Math.min(0.8, rotX));
        lastX = e.clientX;
        lastY = e.clientY;
      }
      const rect = canvas.getBoundingClientRect();
      mX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    canvas.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    canvas.addEventListener("mousemove", onMouse);

    const onResize = () => {
      const w = canvas.parentElement.offsetWidth;
      const h = canvas.parentElement.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (!isDragging) rotY += 0.002;
      galaxy.rotation.y = rotY;
      galaxy.rotation.x = rotX;

      const tx = mX * 6,
        ty = -mY * 4 + 22,
        tz = 32;
      camera.position.x += (tx - camera.position.x) * 0.03;
      camera.position.y += (ty - camera.position.y) * 0.03;
      camera.position.z = tz;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      canvas.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, [canvasRef, active]);

  return null;
}