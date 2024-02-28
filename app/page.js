import Image from "next/image";
import { Arrivals, Brands, HeroSection, Poster, Favourite, Application, Contatct, BestSelling, All_Products, ExclusiveOffer } from "./components";


export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <Brands/>
      <BestSelling/>
      <ExclusiveOffer/>
      <All_Products/>
      <Arrivals/>
      <Poster/>
      <Favourite/>
      {/* <Application/> */}
      <Contatct/>
    </main>
  );
}
