import BenefitsSection from "../components/BenefitsSection";
import CardsSection from "../components/CardsSection";
import DescriptionSection from "../components/DescriptionSection";
import ExclusiveOffer from "../components/ExclusiveOffer";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import RegistrationForm from "../components/RegistrationForm";

export default function Home() {
  return (
   <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
    <main>
      <HeroSection />
      <DescriptionSection />
      <CardsSection />
      <BenefitsSection />
      <ExclusiveOffer />
      <RegistrationForm />
      <FooterSection />
    </main>
   </div>
  );
}
