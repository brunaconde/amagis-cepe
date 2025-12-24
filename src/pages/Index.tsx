import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import PartnershipSection from "@/components/landing/PartnershipSection";
import BenefitSection from "@/components/landing/BenefitSection";
import WhySection from "@/components/landing/WhySection";
import ScheduleSection from "@/components/landing/ScheduleSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import TestSection from "@/components/landing/TestSection";
import StepsSection from "@/components/landing/StepsSection";
import FormSection from "@/components/landing/FormSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <PartnershipSection />
      <BenefitSection />
      <WhySection />
      <ScheduleSection />
      <TestimonialsSection />
      <TestSection />
      <StepsSection />
      <FormSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
