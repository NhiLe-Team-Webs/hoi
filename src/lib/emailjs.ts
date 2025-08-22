// src/lib/emailjs.ts
import axios from 'axios';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmailViaEmailJS = async (toEmail: string, name: string, giftLink: string) => {
  // ✅ Debug input parameters
  console.log('🔍 Input parameters:', { toEmail, name, giftLink });
  
  // ✅ TEMPORARY: Test with hardcoded email
  const testEmail = "test@example.com"; // Replace with your actual email for testing
  console.log('🧪 Using test email:', testEmail);
  
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.error('❌ Thiếu cấu hình EmailJS');
    return { success: false, error: 'Missing EmailJS configuration' };
  }

  // ✅ Validate input parameters
  if (!toEmail || toEmail.trim() === '') {
    console.error('❌ Email address is empty or invalid');
    return { success: false, error: 'Email address is required' };
  }

  if (!name || name.trim() === '') {
    console.error('❌ Name is empty');
    return { success: false, error: 'Name is required' };
  }

  const data = {
    service_id: EMAILJS_SERVICE_ID,
    template_id: EMAILJS_TEMPLATE_ID,
    user_id: EMAILJS_PUBLIC_KEY,
    template_params: {
      // ✅ Try multiple parameter names for email (using test email temporarily)
      to_email: testEmail,  // Use hardcoded email for testing
      email: testEmail,
      recipient: testEmail,
      
      // ✅ Name parameters
      to_name: name.trim(),
      user_name: name.trim(),
      name: name.trim(),
      
      // ✅ Other parameters
      gift_link: giftLink,
      from_name: 'Nhi Lê & Team',
      reply_to: 'vanductan.nlt@gmail.com',
    },
  };

  // ✅ Debug the data being sent
  console.log('📤 Sending data to EmailJS:', JSON.stringify(data, null, 2));

  try {
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data, {
      headers: { 'Content-Type': 'application/json' },
    });
    
    console.log('✅ Gửi email thành công:', toEmail);
    console.log('📋 Response:', response.data);
    
    return { success: true, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('❌ Lỗi:', error.response?.data || error.message);
      console.error('📋 Full error response:', error.response);
      return { 
        success: false, 
        error: error.response?.data || error.message,
        status: error.response?.status 
      };
    } else {
      console.error('❌ Lỗi không xác định:', error);
      return { success: false, error: 'Unknown error occurred' };
    }
  }
};