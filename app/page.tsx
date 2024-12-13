import Features from "./_components/Features";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import Pricing from "./_components/Pricing";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <HeroSection />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
