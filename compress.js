export default async function handler(req, res) {
  const { text } = await req.json ? await req.json() : req.body;

  try {
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "user", content: `اختصر هذه الرسالة بنسبة 50% بدون فقدان المعنى:\n${text}` }
        ]
      })
    });

    const data = await r.json();
    res.status(200).json({ content: data.choices?.[0]?.message?.content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
