export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { question } = req.body;

  try {
    const response = await fetch("https://ai-agentic-hackathon-production.up.railway.app/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: question }),
    });

    const data = await response.json();
    res.status(200).json({ answer: data.reply || "No response from Coral" });
  } catch (error) {
    console.error("Error calling Coral:", error);
    res.status(500).json({ answer: "Error connecting to Coral server" });
  }
}
