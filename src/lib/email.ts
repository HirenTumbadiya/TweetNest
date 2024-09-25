import nodemailer from "nodemailer";

interface SendEmailProps {
  to: string;
  subject: string;
  text?: string;
  html: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail", // You can change to your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async ({ to, subject, text, html }: SendEmailProps) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      html,
    };
    
    await transporter.sendMail(mailOptions);
    console.log("Password reset email sent to:", to);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
