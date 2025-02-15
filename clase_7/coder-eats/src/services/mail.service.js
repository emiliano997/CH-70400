import { createTransport } from "nodemailer";

import { CONFIG } from "../config/config.js";
import { EMAIL_TYPES } from "../common/constants/email-types.js";

class MailService {
  constructor() {
    this.transporter = createTransport({
      host: CONFIG.MAIL.HOST,
      port: CONFIG.MAIL.PORT,
      auth: {
        user: CONFIG.MAIL.USER,
        pass: CONFIG.MAIL.PASSWORD,
      },
    });
  }

  async getMessageTemplate({ type, email }) {
    let message = `
    <body style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column; font-family: Arial, sans-serif; color: #333; background-color: #f4f4f4; margin: 0; padding: 0;">
    
    <h2> Hola, ${email}! </h2>
    
    `;

    switch (type) {
      case EMAIL_TYPES.WELCOME:
        message += `
          <h3 style="color: darkblue">
            Bienvenido a nuestra App de Coder Eats!
          </h3>

          <br>
          
          Gracias por registrarte en nuestra app.
        `;
        break;
    }

    message += `
      <br>

      <img
        src="cid:logo"
        alt="Logo de Coder Eats"
        style="margin-top: 30px; width: 100px; height: 100px; object-fit: cover; border-radius: 50%;"
      />

      </body>
    `;

    return message;
  }

  async sendMail({ to, subject, type }) {
    try {
      const html = await this.getMessageTemplate({ type, email: to });

      const info = await this.transporter.sendMail({
        from: CONFIG.MAIL.FROM,
        to,
        subject,
        html,
        attachments: [
          {
            filename: "logo.webp",
            path: "./public/logo.webp",
            cid: "logo",
          },
        ],
      });

      console.log("Message sent: ", info.messageId);
    } catch (error) {
      console.error("Error sending email: ", error);
    }
  }
}

export const mailService = new MailService();
