import { NextResponse } from "next/server";
import { emailAdapter } from "@/lib/email-adapter";
import { resume } from "@/content/resume";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body as { name?: string; email?: string; message?: string };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Resend 테스트 모드: 수신자를 본인 이메일로 제한. 도메인 인증 후 제거하면 resume.contact.email 로 발송됨.
    const to = process.env.CONTACT_FORM_TO_EMAIL ?? resume.contact.email;
    const subject = `[Resume site] Message from ${name}`;
    const text = `From: ${name} <${email}>\n\n${message}`;
    const html = `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><pre>${message}</pre>`;

    const result = await emailAdapter.send({
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    if (!result.ok) {
      const errMsg = result.error ?? "Send failed";
      console.error("[POST /api/contact] Email send failed:", errMsg);
      return NextResponse.json({ error: errMsg }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
