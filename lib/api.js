const API_KEY = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;

const API_BASE = "https://openrouter.ai/api/v1/chat/completions";

export async function sendToCosmosAI(messages, systemPrompt, maxTokens = 1000) {
  if (!API_KEY) {
    throw new Error("Missing OPENROUTER API KEY in .env.local");
  }

  const response = await fetch(API_BASE, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json",

      // مهم جداً لـ OpenRouter
      "HTTP-Referer": "http://localhost:3000",
      "X-Title": "COSMOS-AI",
    },
    body: JSON.stringify({
      model: "poolside/laguna-m.1:free",

      messages: [
        systemPrompt
          ? { role: "system", content: systemPrompt }
          : null,

        ...messages,
      ].filter(Boolean),

      max_tokens: maxTokens,
      temperature: 0.7,
    }),
  });

  const data = await response.json();

  console.log("OPENROUTER RESPONSE:", data);

  if (!response.ok) {
    throw new Error(data?.error?.message || "OpenRouter API failed");
  }

  return data?.choices?.[0]?.message?.content || "No response from COSMOS-AI";
}

export async function sendQuickMessage(messages, systemPrompt) {
  return sendToCosmosAI(messages, systemPrompt, 400);
}