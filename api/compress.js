export default async function handler(req, res) {
  try {
    // نحاول قراءة النص المرسل
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const text = body.text || '';

    if (!text) {
      return res.status(400).json({ error: 'text is required' });
    }

    // طلب إلى OpenAI
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

    // نحاول قراءة الردّ كنص أولًا ثم نحوله JSON لتفادي أخطاء parsing
    const raw = await r.text();
    if (!raw) return res.status(500).json({ error: 'empty response from OpenAI' });

    let data = {};
    try { data = JSON.parse(raw); } catch (err) {
      return res.status(500).json({ error: 'invalid JSON from OpenAI', raw });
    }

    const content = data?.choices?.[0]?.message?.content || '';
    return res.status(200).json({ content });
  } catch (e) {
    return res.status(500).json({ error: e.message || 'server error' });
  }
}
