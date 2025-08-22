// src/lib/telegram.ts
import axios from 'axios';

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;  
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID; 

export const sendToTelegram = async (data: {
  name: string;
  email: string;
  phone: string;
  question: string;
  consent: boolean;
}) => {
  const message = `
📌 *Một câu hỏi mới cho livestream sắp tới!*

👤 *Họ tên:* ${data.name}
📧 *Email:* ${data.email}
📱 *SĐT:* ${data.phone}
💬 *Câu hỏi:* ${data.question}

✅ *Đồng ý nhận thông tin:* ${data.consent ? 'Có' : 'Không'}
`;

  try {
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'Markdown',
    });
    console.log('✅ Tin nhắn đã gửi thành công!');
  } catch (error) {
    console.error('❌ Lỗi khi gửi tin nhắn:', error);
  }
};