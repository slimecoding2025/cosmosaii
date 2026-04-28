// three/HeroScene.jsx

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene({ canvasRef }) {
  const rendererRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000008, 1);
    renderer.setSize(canvas.parentElement.offsetWidth, canvas.parentElement.offsetHeight);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      canvas.parentElement.offsetWidth / canvas.parentElement.offsetHeight,
      0.1,
      3000
    );
    camera.position.set(0, 0, 5);

    /* --- Stars --- */
    const STAR_COUNT = 12000;
    const sPos = new Float32Array(STAR_COUNT * 3);
    const sColor = new Float32Array(STAR_COUNT * 3);
    const sSizes = new Float32Array(STAR_COUNT);

    for (let i = 0; i < STAR_COUNT; i++) {
      sPos[i * 3] = (Math.random() - 0.5) * 1200;
      sPos[i * 3 + 1] = (Math.random() - 0.5) * 1200;
      sPos[i * 3 + 2] = (Math.random() - 0.5) * 1200;
      sSizes[i] = Math.random() * 1.2 + 0.3;

      const r = Math.random();
      if (r < 0.55) {
        sColor[i * 3] = 1;
        sColor[i * 3 + 1] = 1;
        sColor[i * 3 + 2] = 1;
      } else if (r < 0.75) {
        sColor[i * 3] = 0.7;
        sColor[i * 3 + 1] = 0.88;
        sColor[i * 3 + 2] = 1;
      } else if (r < 0.88) {
        sColor[i * 3] = 1;
        sColor[i * 3 + 1] = 0.95;
        sColor[i * 3 + 2] = 0.6;
      } else {
        sColor[i * 3] = 1;
        sColor[i * 3 + 1] = 0.6;
        sColor[i * 3 + 2] = 0.3;
      }
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(sPos, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(sColor, 3));
    starGeo.setAttribute("size", new THREE.BufferAttribute(sSizes, 1));

    const starMat = new THREE.PointsMaterial({
      size: 0.7,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    scene.add(new THREE.Points(starGeo, starMat));

    /* --- Nebula particles --- */
    const NEB = 4000;
    const nPos = new Float32Array(NEB * 3);
    const nCol = new Float32Array(NEB * 3);

    for (let i = 0; i < NEB; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 60 + Math.random() * 180;
      nPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      nPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.35;
      nPos[i * 3 + 2] = r * Math.cos(phi) - 40;
      const t = Math.random();
      if (t < 0.4) {
        nCol[i * 3] = 0;
        nCol[i * 3 + 1] = t * 2;
        nCol[i * 3 + 2] = 1;
      } else if (t < 0.7) {
        nCol[i * 3] = t;
        nCol[i * 3 + 1] = 0;
        nCol[i * 3 + 2] = 1;
      } else {
        nCol[i * 3] = 1;
        nCol[i * 3 + 1] = t;
        nCol[i * 3 + 2] = 0.5;
      }
    }
    const nebGeo = new THREE.BufferGeometry();
    nebGeo.setAttribute("position", new THREE.BufferAttribute(nPos, 3));
    nebGeo.setAttribute("color", new THREE.BufferAttribute(nCol, 3));
    const nebMat = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const nebula = new THREE.Points(nebGeo, nebMat);
    scene.add(nebula);

    /* --- Planet --- */
    const planetGeo = new THREE.SphereGeometry(2.6, 64, 64);
    const planetMat = new THREE.MeshPhongMaterial({
      color: 0x05102a,
      emissive: 0x020710,
      specular: 0x0066ff,
      shininess: 40,
    });
    const planet = new THREE.Mesh(planetGeo, planetMat);
    planet.position.set(3.5, -0.8, -14);
    scene.add(planet);

    // Wireframe overlay
    const wfGeo = new THREE.SphereGeometry(2.62, 22, 22);
    const wfMat = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.04,
    });
    planet.add(new THREE.Mesh(wfGeo, wfMat));

    // Atmosphere
    const atmMat = new THREE.MeshPhongMaterial({
      color: 0x0055ff,
      transparent: true,
      opacity: 0.09,
      side: THREE.BackSide,
    });
    planet.add(new THREE.Mesh(new THREE.SphereGeometry(3.0, 32, 32), atmMat));

    // Outer atmosphere glow ring
    const atmMat2 = new THREE.MeshPhongMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.04,
      side: THREE.BackSide,
    });
    planet.add(new THREE.Mesh(new THREE.SphereGeometry(3.4, 32, 32), atmMat2));

    // Ring system
    const ringGeo = new THREE.TorusGeometry(4.2, 0.28, 3, 90);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x3388ff,
      transparent: true,
      opacity: 0.14,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.8;
    planet.add(ring);

    const ringGeo2 = new THREE.TorusGeometry(5.0, 0.12, 3, 90);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x00ffaa,
      transparent: true,
      opacity: 0.08,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 2.8;
    planet.add(ring2);

    /* --- Lights --- */
    scene.add(new THREE.AmbientLight(0x111133, 0.6));
    const sun = new THREE.DirectionalLight(0x4466ff, 3);
    sun.position.set(-12, 6, 8);
    scene.add(sun);
    const rimLight = new THREE.PointLight(0x00ffff, 0.8, 200);
    rimLight.position.set(0, 0, 12);
    scene.add(rimLight);

    /* --- Shooting stars --- */
    const shooters = [];
    const createShooter = () => {
      const geo = new THREE.BufferGeometry();
      const pts = new Float32Array(6);
      const mat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.9,
      });
      const line = new THREE.Line(geo, mat);
      const x = (Math.random() - 0.5) * 400;
      const y = Math.random() * 200 + 50;
      const z = (Math.random() - 0.5) * 200 - 50;
      line.userData = {
        x,
        y,
        z,
        vx: -(Math.random() * 3 + 2),
        vy: -(Math.random() + 0.5),
        life: 0,
        maxLife: 60 + Math.random() * 40,
      };
      pts[0] = x;
      pts[1] = y;
      pts[2] = z;
      pts[3] = x + 30;
      pts[4] = y + 10;
      pts[5] = z;
      geo.setAttribute("position", new THREE.BufferAttribute(pts, 3));
      scene.add(line);
      shooters.push({ line, geo, mat });
    };
    for (let s = 0; s < 5; s++) setTimeout(createShooter, s * 1800);

    /* --- Mouse parallax --- */
    let mX = 0,
      mY = 0;
    const onMouse = (e) => {
      mX = (e.clientX / window.innerWidth - 0.5) * 2;
      mY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    /* --- Resize --- */
    const onResize = () => {
      const w = canvas.parentElement.offsetWidth;
      const h = canvas.parentElement.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    /* --- Animate --- */
    const clock = new THREE.Clock();
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      starMat.size = 0.65 + Math.sin(t * 0.4) * 0.05;
      nebula.rotation.y = -t * 0.004;

      planet.rotation.y = t * 0.04;
      planet.rotation.z = Math.sin(t * 0.07) * 0.02;

      camera.position.x += (mX * 1.8 - camera.position.x) * 0.025;
      camera.position.y += (-mY * 1.8 - camera.position.y) * 0.025;
      camera.lookAt(0, 0, 0);

      // Update shooters
      shooters.forEach(({ line, geo, mat }) => {
        const d = line.userData;
        d.life++;
        if (d.life > d.maxLife) {
          d.x = (Math.random() - 0.5) * 400;
          d.y = Math.random() * 200 + 50;
          d.life = 0;
        }
        d.x += d.vx * 3;
        d.y += d.vy * 3;
        const pos = geo.attributes.position.array;
        pos[0] = d.x;
        pos[1] = d.y;
        pos[2] = d.z;
        pos[3] = d.x + 25;
        pos[4] = d.y + 8;
        pos[5] = d.z;
        geo.attributes.position.needsUpdate = true;
        mat.opacity = Math.max(0, 0.9 - d.life / d.maxLife);
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, [canvasRef]);

  return null;
}