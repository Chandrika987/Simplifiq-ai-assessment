import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function sendAuditEmail(
  email: string,
  company: string,
  audit: string
) {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",

      to: email,

      subject: `AI Business Audit for ${company}`,

      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h1>AI Business Audit</h1>

          <p>
            Here is your AI-generated business audit report for
            <strong>${company}</strong>.
          </p>

          <div style="margin-top:20px; white-space: pre-wrap;">
            ${audit}
          </div>
        </div>
      `,
    });

    console.log("Email sent:", response);

    return response;
  } catch (error) {
    console.error("Email Error:", error);

    return null;
  }
}