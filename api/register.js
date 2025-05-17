export default async function handler(req, res) {
    if (req.method === "POST") {
      try {
        const response = await fetch("https://test.blockfuselabs.com/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(req.body)
        });
  
        const data = await response.json();
        res.status(response.status).json(data);
      } catch (err) {
        res.status(500).json({ error: "Something went wrong" });
      }
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  