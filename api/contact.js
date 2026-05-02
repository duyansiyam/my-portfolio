import { Resend } from "resend";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = request.body ?? {};
  const trimmedName = String(name ?? "").trim();
  const trimmedEmail = String(email ?? "").trim();
  const trimmedMessage = String(message ?? "").trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return response.status(400).json({ error: "Please complete every field." });
  }

  if (!process.env.RESEND_API_KEY) {
    return response.status(500).json({
      error: "Email service is not configured yet.",
    });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const recipientEmail =
    process.env.CONTACT_TO_EMAIL ?? "duyanjanine@gmail.com";
  const senderEmail =
    process.env.RESEND_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  try {
    await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      replyTo: trimmedEmail,
      subject: `Portfolio message from ${trimmedName}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
          <h2>New portfolio contact message</h2>
          <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(trimmedMessage).replaceAll("\n", "<br />")}</p>
        </div>
      `,
    });

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Resend contact error:", error);

    return response.status(500).json({
      error: "Unable to send your message right now.",
    });
  }
}
