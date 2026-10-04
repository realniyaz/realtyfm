import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, project, message } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required" },
        { status: 400 }
      );
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = process.env.LEAD_NOTIFICATION_EMAIL || "info@realtyfm.com";

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New Luxury Lead: ${name} — ${project || "General Advisory"}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #0c0d0e; color: #f8f9fa; padding: 32px; border-radius: 8px;">
          <h2 style="color: #d4ab47; margin-bottom: 16px; border-bottom: 1px solid #282c34; padding-bottom: 8px;">
            Realty FM — New Property Inquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse; color: #e0e0e0;">
            <tr><td style="padding: 8px 0; color: #a47b30; width: 140px;"><strong>Client Name:</strong></td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #a47b30;"><strong>Phone:</strong></td><td>${phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #a47b30;"><strong>Email:</strong></td><td>${email || "N/A"}</td></tr>
            <tr><td style="padding: 8px 0; color: #a47b30;"><strong>Project Interest:</strong></td><td>${project || "General Portfolio Advisory"}</td></tr>
            <tr><td style="padding: 8px 0; color: #a47b30; vertical-align: top;"><strong>Message:</strong></td><td>${message || "No notes provided."}</td></tr>
          </table>
          <p style="font-size: 12px; color: #71717a; margin-top: 24px;">
            Transmitted via Realty FM Web Platform
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to dispatch email lead notification" },
      { status: 500 }
    );
  }
}