import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const LivestreamForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
    consent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      setConsentError(true);
      return;
    }
    
    setConsentError(false);
    
    // TODO: Send to backend/Google Sheets
    console.log('Livestream Question Data:', formData);
    
    toast({
      title: "Đã gửi câu hỏi thành công! ✅",
      description: "Cảm ơn bạn rất nhiều! Nhi sẽ xem qua và chọn những câu hỏi hay nhất cho buổi livestream sắp tới.",
    });
    
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      consent: checked
    });
    if (checked) setConsentError(false);
  };

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-card text-center">
            <h2 className="text-3xl font-bold mb-4 font-primary text-foreground">
              Đã gửi câu hỏi thành công! ✅
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cảm ơn bạn rất nhiều! Nhi sẽ xem qua và chọn những câu hỏi hay nhất cho buổi livestream sắp tới. Hẹn gặp lại bạn nhé!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-card p-8 md:p-12 rounded-2xl shadow-card text-center">
          <h2 className="text-3xl font-bold mb-4 font-primary text-foreground">
            Đặt Câu Hỏi Livestream Cho Nhi Lê
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Có điều gì bạn luôn muốn hỏi Nhi trong buổi livestream sắp tới? Hãy để lại câu hỏi ở đây. Những câu hỏi hay nhất sẽ được chọn để trả lời trực tiếp!
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto text-left space-y-4">
            <div>
              <Label htmlFor="name" className="block text-foreground font-medium mb-2">
                Họ và tên
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Nguyễn Văn A"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-lg border-2 focus:border-primary"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="block text-foreground font-medium mb-2">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="bancua@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-lg border-2 focus:border-primary"
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="block text-foreground font-medium mb-2">
                Số điện thoại
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="090..."
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-lg border-2 focus:border-primary"
              />
            </div>
            
            <div>
              <Label htmlFor="question" className="block text-foreground font-medium mb-2">
                Câu hỏi của bạn
              </Label>
              <Textarea
                id="question"
                name="question"
                rows={4}
                placeholder="Chị Nhi ơi, cho em hỏi..."
                value={formData.question}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-lg border-2 focus:border-primary"
              />
            </div>
            
            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={handleCheckboxChange}
                className="mt-1"
              />
              <Label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                Tôi đồng ý nhận thông tin, tin tức và các ưu đãi từ team Nhi Lê qua email và SĐT đã cung cấp.
              </Label>
            </div>
            
            {consentError && (
              <p className="text-destructive text-sm text-center">
                Bạn cần đồng ý với điều khoản để tiếp tục.
              </p>
            )}
            
            <Button
              type="submit"
              variant="gradient"
              size="lg"
              className="w-full text-lg py-3 px-8 rounded-full"
            >
              Gửi câu hỏi ngay
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LivestreamForm;