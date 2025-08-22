import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { sendEmailViaEmailJS } from "@/lib/emailjs";

const GiftForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      // ✅ Bắt đầu loading (tùy chọn)
      setIsLoading(true);

      try {
        // ✅ Gọi hàm gửi email qua EmailJS
        await sendEmailViaEmailJS(formData.email, formData.name, "https://your-gift-link-here.com/ebook");

        // ✅ Thông báo thành công
        toast({
          title: "🎉 Đã gửi quà thành công!",
          description: `Cảm ơn ${formData.name}! Hãy kiểm tra email để nhận quà nhé.`,
        });

        setIsSubmitted(true);
      } catch (error) {
        // ✅ Xử lý lỗi (nếu có)
        toast({
          title: "❌ Lỗi gửi quà",
          description: "Có lỗi xảy ra. Vui lòng thử lại sau.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-20 bg-gradient-soft">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-card text-center">
            <h2 className="text-3xl font-bold mb-4 font-primary text-foreground">
              Cảm ơn bạn đã đăng ký! 🎉
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Món quà đang trên đường đến với email của bạn. Hãy kiểm tra hộp thư đến (và cả mục quảng cáo/spam) nhé!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-soft">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-card p-8 md:p-12 rounded-2xl shadow-card text-center">
          <h2 className="text-3xl font-bold mb-4 font-primary text-foreground">
            Món Quà Đặc Biệt Dành Riêng Cho Bạn!
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nhận ngay Ebook <strong>"5 Bước Xây Dựng Thói Quen Tích Cực"</strong> mà mình đã đúc kết để bắt đầu hành trình thay đổi bản thân nhé!
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <Input
                type="text"
                name="name"
                placeholder="Tên của bạn"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-lg border-2 focus:border-primary"
              />
              <Input
                type="email"
                name="email"
                placeholder="Địa chỉ email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-lg border-2 focus:border-primary"
              />
            </div>
            <Button
            type="submit"
            variant="gradient"
            size="lg"
            className="w-full md:w-auto text-lg py-3 px-8 rounded-full"
            disabled={isLoading} // ✅ Tắt khi đang gửi
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Đang gửi...
              </>
            ) : (
              "💌 Gửi quà cho tôi ngay!"
            )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GiftForm;