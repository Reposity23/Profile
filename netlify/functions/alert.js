// netlify/functions/alert.js
export async function handler(event, context) {
  const botToken = "8404118059:AAH2iA8Rmitkea8WM2F1fCxyaWP87-Aoq6Q";
  const chatId = "6642388335";

  const ip = event.headers["x-nf-client-connection-ip"] || "Unknown IP";
  const agent = event.headers["user-agent"] || "Unknown Agent";
  const time = new Date().toISOString();

  const message = `🚨 New Visitor Alert!\n\n🌍 IP: ${ip}\n🖥 Browser: ${agent}\n⏰ Time: ${time}`;

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`
    );
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
}
