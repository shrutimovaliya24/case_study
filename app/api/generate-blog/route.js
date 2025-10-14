


import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { topic } = await request.json();

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      console.error("❌ OpenRouter API key not found");
      return NextResponse.json(
        {
          title: `${topic} - Latest Insights`,
          excerpt: "Exploring innovative solutions in fleet management technology.",
          fallback: true,
        },
        { status: 200 }
      );
    }

    console.log("🔑 Using OpenRouter API key:", apiKey.substring(0, 15) + "...");

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // reliable free model
        messages: [
          {
            role: "system",
            content:
              "You are a professional blog writer specializing in fleet management and GPS technology. Generate concise, professional blog content in JSON format only."
          },
          {
            role: "user",
            content: `Generate a JSON object ONLY with two fields: "title" (max 60 characters) and "excerpt" (max 200 characters) about "${topic}". Do NOT include any extra text. Example:
{
  "title": "Sample Title",
  "excerpt": "Sample 2-sentence summary."
}`
          }
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    console.log("📡 OpenRouter API Status:", res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ OpenRouter API Error:", errorText);

      return NextResponse.json({
        title: `${topic} - Latest Insights`,
        excerpt:
          "Exploring innovative solutions in fleet management technology and how they improve operational efficiency.",
        fallback: true,
      });
    }

    const data = await res.json();
    console.log("📄 Raw OpenRouter Response:", JSON.stringify(data, null, 2));

    // Robust JSON parsing
    let parsedContent = null;
    try {
      const content = data.choices?.[0]?.message?.content || "";
      const jsonMatch = content.match(/\{[\s\S]*\}/); // extract JSON only
      parsedContent = jsonMatch ? JSON.parse(jsonMatch[0]) : null;
    } catch (e) {
      parsedContent = null;
    }

    return NextResponse.json({
      title: parsedContent?.title || `AI Blog: ${topic}`,
      excerpt:
        parsedContent?.excerpt ||
        "AI-generated content about fleet management and GPS technology solutions.",
      fallback: parsedContent ? false : true,
    });

  } catch (error) {
    console.error("❌ Server error:", error);
    return NextResponse.json(
      {
        title: `Latest Insights on Fleet Management`,
        excerpt: "Exploring innovative solutions in fleet management technology.",
        fallback: true,
      },
      { status: 200 }
    );
  }
}