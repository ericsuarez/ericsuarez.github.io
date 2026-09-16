export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  // The real bank exchange is intentionally disabled until the Enable Banking
  // application ID, private key and state validation are configured as secrets.
  if (req.query?.error) {
    return res.status(400).send('Bank authorization was not completed.');
  }

  if (!req.query?.code) {
    return res.status(400).send('Callback endpoint ready. No authorization code received.');
  }

  return res.status(503).send('Authorization received, but bank linking is not enabled yet.');
}
