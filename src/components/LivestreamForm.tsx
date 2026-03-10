import { useState } from "react";
import { Button } from "@/components/ui/button";

const LivestreamForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleReset = () => {
    setIsSubmitted(false);
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

          <div className="max-w-4xl mx-auto">
            {/* Google Form Iframe */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe6IArZ1DX5ALcWLA7xK1Ru0ZmnFghr_v8a3BBWCK2PdHo6fQ/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Livestream Question Form"
              className="rounded-lg border border-gray-200"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivestreamForm;