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

    const to = resume.contact.email;
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
      return NextResponse.json({ error: result.error ?? "Send failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
