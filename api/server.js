export default async function handler(req, res) {
  const api_key = "TBdyF1Yp2mn63eoR1jkAX1ZrE3K96j41fo3tpN84A4TubYf7hflBKH9n5EBvsgGsFm3WPY482eAQ06zbN1WOgM1RvoY1w30gCdPh"; // ← GANTI DI SINI

  const params = new URLSearchParams();
  params.append("api_key", api_key);
  params.append("reff_id", "test12345");
  params.append("nominal", "1000");
  params.append("type", "ewallet");
  params.append("metode", "qris");

  try {
    const response = await fetch("https://atlantich2h.com/deposit/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params
    });

    const text = await response.text();
    res.status(200).send(text);
  } catch (e) {
    res.status(500).send("Error: " + e.message);
  }
                }
