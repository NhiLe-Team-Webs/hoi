// src/lib/google-sheet.ts
export const sendToGoogleSheet = async (data: Record<string, unknown>) => {
  const API_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  if (!API_URL) {
    console.error('❌ Thiếu VITE_GOOGLE_SCRIPT_URL trong .env');
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      mode: 'no-cors', // ⚠️ Google Apps Script yêu cầu mode: 'no-cors'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Vì mode: 'no-cors', bạn không thể đọc response
    console.log('✅ Dữ liệu đã được gửi đến Google Sheet (no-cors)');
  } catch (error) {
    console.error('❌ Lỗi khi gửi dữ liệu:', error);
  }
};