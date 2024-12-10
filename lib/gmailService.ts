// gmailService.ts
import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';
const nodemailer = require("nodemailer")

const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REDIRECT_URI = process.env.GMAIL_REDIRECT_URI;
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export const sendVerificationEmail = async (to: string, token: string) => {
  try {
    const accessToken = await oauth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'your-email@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const verificationLink = `http://localhost:3000/verify-email?token=${token}`;

    const mailOptions = {
      from: 'Your Name <your-email@gmail.com>',
      to: to,
      subject: 'Email Verification',
      text: `Please verify your email by clicking the following link: ${verificationLink}`,
      html: `<p>Please verify your email by clicking the following link: <a href="${verificationLink}">${verificationLink}</a></p>`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
