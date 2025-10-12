export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  try {
    // اقرأ البودي بأمان (قد يكون سترينغ)
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const text = body.text || '';

    if (!text) {
      return res.status(400).json({ error: 'text is required' });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OPENAI_API_KEY is missing' });
    }

    // طلب OpenAI
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

    // لو الرد فشل، أرجع محتوى الخطأ كما هو
    const raw = await r.text();
    if (!raw) {
      return res.status(502).json({ error: 'empty response from OpenAI' });
    }

    // جرّب تفك الـJSON
    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      return res.status(502).json({ error: 'invalid JSON from OpenAI', raw });
    }

    // لو OpenAI ما رجّع OK، ارجع الرسالة كما هي
    if (!r.ok) {
      return res.status(r.status).json({ error: 'openai_error', details: data });
    }

    const content = data?.choices?.[0]?.message?.content || '';
    return res.status(200).json({ content });

  } catch (e) {
    return res.status(500).json({ error: e.message || 'server error' });
  }
}
