import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const GiftForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Integrate with email marketing service
    console.log('Gift Form Data:', formData);
    
    toast({
      title: "Đăng ký thành công! 🎉",
      description: "Món quà đang trên đường đến email của bạn. Hãy kiểm tra hộp thư nhé!",
    });
    
    setIsSubmitted(true);
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
            >
              💌 Gửi quà cho tôi ngay!
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GiftForm;