import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendToTelegram } from "@/lib/telegram";

const LivestreamForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
    consent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);  
  const { toast } = useToast();
  const handleReset = () => {
  setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      question: "",
      consent: false,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      setConsentError(true);
      return;
    }

    setConsentError(false);
    setIsLoading(true);  

    try {
      // ✅ Gửi dữ liệu đến Telegram
      await sendToTelegram(formData);

      toast({
        title: "Đã gửi câu hỏi thành công! ✅",
        description: "Cảm ơn bạn rất nhiều! Nhi sẽ xem qua và chọn những câu hỏi hay nhất cho buổi livestream sắp tới.",
      });

      setIsSubmitted(true);
    } catch (error) {
      toast({
        title: "Lỗi gửi câu hỏi",
        description: "Có lỗi xảy ra khi gửi. Vui lòng thử lại sau.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false); // ✅ Dừng loading dù thành công hay lỗi
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      consent: checked,
    });
    if (checked) setConsentError(false);
  };

  if (isSubmitted) {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-card p-8 md:p-12 rounded-2xl shadow-card text-center space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-primary text-foreground">
              Đã gửi câu hỏi thành công! ✅
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cảm ơn bạn rất nhiều! Nhi sẽ xem qua và chọn những câu hỏi hay nhất cho buổi livestream sắp tới. Hẹn gặp lại bạn nhé!
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              variant="gradient" 
              size="lg"
              onClick={handleReset}
              className="text-lg px-8 font-medium"
            >
              Gửi thêm câu hỏi
            </Button>
          </div>
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
                disabled={isLoading}
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
                disabled={isLoading}
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
                disabled={isLoading}
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
                disabled={isLoading}
                className="w-full px-5 py-3 rounded-lg border-2 focus:border-primary"
              />
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={handleCheckboxChange}
                disabled={isLoading}
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
              className="w-full text-lg py-3 px-8 rounded-full font-medium"
              disabled={isLoading} 
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Đang gửi...
                </>
              ) : (
                "Gửi câu hỏi ngay"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LivestreamForm;