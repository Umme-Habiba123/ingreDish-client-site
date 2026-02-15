import CommitmentSection from "@/homePage/CommitmentSection/CommitmentSection";
// import GallerySection from "@/homePage/Gallerysection/GallerySection";
import PremiumHeroSection from "@/homePage/PremiumHeroSection/PremiumHeroSection";
import Products from "./products/page";


export default function Home() {
  return (
    <div>
    <Products></Products>
       {/* <GallerySection></GallerySection> */}
      <CommitmentSection></CommitmentSection>
      <PremiumHeroSection></PremiumHeroSection>
    </div>
  );
}
