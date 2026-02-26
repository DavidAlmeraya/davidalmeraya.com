/**
 * Email sender adapter interface.
 * Replace MockEmailAdapter with a real implementation (e.g. Resend, SendGrid)
 * when you have API keys. No keys required for the mock.
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

// Swap to your provider when ready, e.g.:
// import { Resend } from 'resend';
// export const emailAdapter = new ResendAdapter(process.env.RESEND_API_KEY!);
export const emailAdapter: EmailAdapter = new MockEmailAdapter();
