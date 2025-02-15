import twilio from "twilio";

import { CONFIG } from "../config/config.js";

class SmsService {
  constructor() {
    this.client = twilio(CONFIG.SMS.ACCOUNT_SID, CONFIG.SMS.AUTH_TOKEN);
  }

  async sendMessage({ to, message }) {
    try {
      const info = await this.client.messages.create({
        body: message,
        from: CONFIG.SMS.PHONE_NUMBER,
        to,
      });

      console.log(info);
    } catch (error) {
      console.error(error);
    }
  }
}

export const smsService = new SmsService();
