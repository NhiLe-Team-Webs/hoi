// src/components/ui/star-rating.tsx
import { Star } from 'lucide-react';

export const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < rating ? '#F59E0B' : 'none'}
          stroke="#D1D5DB"
          className="text-yellow-400"
        />
      ))}
    </div>
  );
};