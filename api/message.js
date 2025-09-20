import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  try {
    // Replace with your actual Coral Protocol API endpoint and agent ID
    const coralResponse = await fetch('https://api.coralprotocol.com/agents/your-agent-id/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CORAL_API_KEY}`,
      },
      body: JSON.stringify({
        message: question,
      }),
    });

    if (!coralResponse.ok) {
      throw new Error(`Coral API error: ${coralResponse.statusText}`);
    }

    const data = await coralResponse.json();

    const answer = data.reply || 'Agent did not return an answer.';

    res.status(200).json({ answer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
