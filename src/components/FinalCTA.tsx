import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <footer className="bg-gradient-hero text-white py-16 md:py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-primary">
          Sẵn sàng tham gia và kết nối chưa?
        </h2>
        <p className="text-lg md:text-xl mb-8 font-medium">
          Đừng để những thắc mắc của bạn bị trôi đi trong hàng ngàn bình luận. Hãy để trợ lý ảo của mình hỗ trợ bạn ngay bây giờ.
        </p>
        <Button
          variant="hero"
          size="lg"
          className="text-lg py-4 px-8 rounded-full"
          onClick={() => window.open('https://m.me/nhilesg.anne', '_blank')}
        >
          💬 Bắt đầu trò chuyện ngay!
        </Button>
      </div>
    </footer>
  );
};

export default FinalCTA;