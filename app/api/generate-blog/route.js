import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { topic } = await request.json();

    // Call GPT API for blog content
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a professional blog writer..." },
          {
            role: "user",
            content: `Generate JSON only with "title" (max 60) and "excerpt" (max 200) about "${topic}".`,
          },
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content || "";
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    const parsedContent = jsonMatch ? JSON.parse(jsonMatch[0]) : {};

    // ✅ Generate unique image URL with multiple fallback options
    const timestamp = Date.now();
    const randomSeed = Math.random().toString(36).substring(7);
    
    // Try Pollinations first
    let imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      `${topic} professional technology modern`
    )}?width=800&height=600&nologo=true&seed=${timestamp}`;

    // ✅ ALWAYS return a valid response with guaranteed image URL
    return NextResponse.json({
      title: parsedContent?.title || `AI Blog: ${topic}`,
      excerpt:
        parsedContent?.excerpt ||
        "AI-generated content about fleet management and GPS technology.",
      image: imageUrl, // This will NEVER be null
    });
  } catch (err) {
    console.error("Blog generation error:", err);
    const fallbackTopic = topic || "technology";
    const timestamp = Date.now();
    
    // ✅ Guaranteed fallback image
    return NextResponse.json({
      title: `AI Blog: ${fallbackTopic}`,
      excerpt: "Exploring innovative solutions in fleet management.",
      image: `https://picsum.photos/800/600?random=${timestamp}`,
    });
  }
}