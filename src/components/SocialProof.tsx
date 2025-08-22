// src/components/SocialProof.tsx
import { StarRating } from '@/components/ui/star-rating.tsx';

export default function SocialProof() {
  const testimonials = [
    {
      text: "Thank you very much Ms.Nhi, you brought back to Vietnam a lot of useful knowledge, help, build a community so that everyone and I can learn many things that we have never known before.♥️",
      author: "Như Ngọc Trần",
      avatar: "/review-1.png",
      rating: 5,
    },
    {
      text: "I’ve listened to NhiLe livestreams and learned so many things from her. It helps me solves problems and makes me think more logically. Besides, I start to get a deeper understanding about healing and awakening which supports my spiritual and mental health. Thanks to the Universe that brings her to my life. Thanks to chị Nhi for the meaningful lessons. Thanks to NhiLe team for the patience and support.",
      author: "Thuy Nguyen",
      avatar: "/review-2.png",
      rating: 5,
    },
    {
      text: "From a person who is always afraid, confused and loses faith in life. I accidentally entered Ms. Nhi's channel, listening to each song like an aunt, sister, teacher sharing necessary knowledge, giving me an energy that I don't think I've ever had: to believe in self, perseverance, discipline, ethics, meaningful and useful living.... from the smallest things! Gratitude to Ms. Nhi from the bottom of my heart. Thank you very much, I don't promise anything, when I do it I will share my journey that I learned from you.",
      author: "Nhi Nguyen",
      avatar: "/review-3.png",
      rating: 5,
    },
    {
      text: "We need your wisdom ,thank you for what you are doing ,it means a lot ,it helps me stay strong 💪 when losing my ways ,it shows me there's always a way , love you and team nhile ♥️♥️💥 …",
      author: "Thanh huyen Do",
      avatar: "/review-4.png",
      rating: 5,
    },
    {
      text: "Thanks for your sharing and your help, I have learn a lot of new knowledge which I even haven’t known before. It’s essential for me as a young people. Your knowledge helps positively change me and become my better version. I want to say thank you to you once again and wish you all the best!",
      author: "Rita",
      avatar: "/review-5.png",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 font-primary text-foreground">
          Cộng đồng nói gì về kênh?
        </h2>

        {/* Card review */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-muted p-6 rounded-xl shadow-md border border-gray-100 transition-transform hover:scale-105"
            >
              {/* Avatar + Rating */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>

              {/* Review text */}
              <p className="text-muted-foreground italic mb-4">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Nút Xem thêm review */}
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=nhi+le&oq=nhi+le&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIICAMQRRgnGDsyBwgEEAAYgAQyBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQg0NjMwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x46e5d6c25fcc4373:0x6fdcf4bf1de01cd2,1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline font-medium"
          >
            👉 Xem thêm 700+ review khác trên Google
          </a>
        </div>
      </div>
    </section>
  );
}

