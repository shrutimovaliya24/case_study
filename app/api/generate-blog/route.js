import { NextResponse } from "next/server";

export async function POST(request) {
  const { topic } = await request.json();

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a professional blog writer for a fleet management and telematics company. Respond ONLY in valid JSON format.",
        },
        {
          role: "user",
          content: `Generate a unique JSON with:
          - "title" (max 60 characters)
          - "excerpt" (max 200 characters)
          - "category" (creative but relevant to fleet management or telematics)
          - "imagePrompt" (brief visual description for AI image generation)
          Each output must be completely new and different from previous ones.`,
        },
      ],
      temperature: 0.9,
      max_tokens: 400,
    }),
  });

  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content || "";
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  const parsedContent = jsonMatch ? JSON.parse(jsonMatch[0]) : {};

  const timestamp = Date.now();

  // ✅ Always generate a unique Pollinations image
  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    parsedContent?.imagePrompt || parsedContent?.title || topic
  )}?width=800&height=600&seed=${timestamp}`;

  // ✅ Return only AI-generated data (no fallbacks)
  return NextResponse.json({
    title: parsedContent.title,
    excerpt: parsedContent.excerpt,
    category: parsedContent.category,
    image: imageUrl,
  });
}
