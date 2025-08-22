import { Button } from "@/components/ui/button";
import nhiAvatar from "@/assets/nhi-avatar.jpg";

const HeroSection = () => {
  return (
    <header className="bg-gradient-hero text-white py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src={nhiAvatar}
          alt="Ảnh đại diện của Nhi Le"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-soft object-cover"
        />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight font-primary">
          Chào mừng bạn đến<br />Ngôi nhà chung của Nhi Le!
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-medium">
          Nơi mọi thắc mắc được giải đáp tức thì và chúng ta kết nối với nhau gần hơn. ❤️
        </p>
        
        <Button
          variant="gradient"
          size="lg"
          className="text-lg py-4 px-8 rounded-full"
          onClick={() => window.open('https://m.me/nhilesg.anne', '_blank')}
        >
          💬 Trò chuyện với Trợ lý ảo ngay!
        </Button>
      </div>
    </header>
  );
};

export default HeroSection;