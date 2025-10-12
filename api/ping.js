export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  return res.status(200).json({
    ok: true,
    runtime: 'node',
    hasKey: !!process.env.OPENAI_API_KEY
  });
}
