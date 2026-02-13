import CommitmentSection from "@/homePage/CommitmentSection/CommitmentSection";
import GallerySection from "@/homePage/Gallerysection/GallerySection";
import PremiumHeroSection from "@/homePage/PremiumHeroSection/PremiumHeroSection";
import Footer from "@/shared/Footer/Footer";
import HeroSectionWithNavbar from "@/shared/HeroSectionWithNavbar/HeroSectionWithNavbar";


export default function Home() {
  return (
    <div>
     <HeroSectionWithNavbar></HeroSectionWithNavbar>

       <GallerySection></GallerySection>
      <CommitmentSection></CommitmentSection>
      <PremiumHeroSection></PremiumHeroSection>
      <Footer></Footer>
    </div>
  );
}
