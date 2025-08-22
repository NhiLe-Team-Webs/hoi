import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import GiftForm from "@/components/GiftForm";
import LivestreamForm from "@/components/LivestreamForm";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ValueProposition />
      <GiftForm />
      <LivestreamForm />
      <SocialProof />
      <FinalCTA />
    </div>
  );
};

export default Index;
