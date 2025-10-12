// api/compress.js
export default async function handler(req, res) {
  try {
    // يدعم JSON سواء إجى كنص أو كـ object
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const text = body.text || '';

    if (!text) {
      return res.status(400).json({ error: 'text is required' });
    }

    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: `اختصر هذه الرسالة 50% بدون فقدان المعنى:\n${text}` }]
      })
    });

    const data = await r.json();
    const content = data?.choices?.[0]?.message?.content || '';
    return res.status(200).json({ content });
  } catch (e) {
    return res.status(500).json({ error: e.message || 'server error' });
  }
}
