import CommitmentSection from "@/homePage/CommitmentSection/CommitmentSection";
import HeroSection from "@/homePage/heroSection/HeroSection";
import PremiumHeroSection from "@/homePage/PremiumHeroSection/PremiumHeroSection";
import Footer from "@/shared/Footer/Footer";
import Navbar from "@/shared/Navbar/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>


      <CommitmentSection></CommitmentSection>
      <PremiumHeroSection></PremiumHeroSection>
      <Footer></Footer>
    </div>
  );
}
