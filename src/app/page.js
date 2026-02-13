import PremiumHeroSection from "@/homePage/PremiumHeroSection/PremiumHeroSection";
import Footer from "@/shared/Footer/Footer";
import Navbar from "@/shared/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>



      <PremiumHeroSection></PremiumHeroSection>
      <Footer></Footer>
    </div>
  );
}
