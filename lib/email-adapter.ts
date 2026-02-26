/**
 * Email sender adapter.
 * Uses Resend (free tier: 3,000 emails/month) when RESEND_API_KEY is set and "resend" is installed.
 * Otherwise falls back to MockEmailAdapter (logs only, no real send).
 */

export interface SendEmailParams {
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  html?: string;
}

export interface EmailAdapter {
  send(params: SendEmailParams): Promise<{ ok: boolean; error?: string }>;
}

export class MockEmailAdapter implements EmailAdapter {
  async send(params: SendEmailParams): Promise<{ ok: boolean; error?: string }> {
    console.log("[MockEmailAdapter] Would send email:", {
      to: params.to,
      subject: params.subject,
      textLength: params.text.length,
    });
    return { ok: true };
  }
}

function createResendAdapter(
  apiKey: string,
  fromEmail: string,
  Resend: new (key: string) => { emails: { send: (opts: object) => Promise<{ data?: { id?: string }; error?: { message: string } }> } }
): EmailAdapter {
  const resend = new Resend(apiKey);
  return {
    async send(params: SendEmailParams): Promise<{ ok: boolean; error?: string }> {
      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: params.to,
        reply_to: params.replyTo,
        subject: params.subject,
        html: params.html ?? params.text,
        text: params.text,
      });
      if (error) return { ok: false, error: error.message };
      if (!data?.id) return { ok: false, error: "No id returned" };
      return { ok: true };
    },
  };
}

function createAdapter(): EmailAdapter {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!apiKey?.trim() || !fromEmail?.trim()) return new MockEmailAdapter();
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { Resend } = require("resend");
    return createResendAdapter(apiKey, fromEmail, Resend);
  } catch {
    console.warn("[email-adapter] Package 'resend' not installed. Using mock. Run: npm install resend");
    return new MockEmailAdapter();
  }
}

export const emailAdapter: EmailAdapter = createAdapter();
