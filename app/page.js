import Image from "next/image";
import { Arrivals, Brands, HeroSection, Poster, Favourite, Application, Contatct, BestSelling, All_Products, ExclusiveOffer } from "./components";
import  { About } from "./components"
import { Collections } from "./components";

export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <Brands/>
      <BestSelling/>
      <About/>
      <Collections/>
      <ExclusiveOffer/>
      <All_Products/>
      <Arrivals/>
      <Poster/>
      <Favourite/>
      <Application/>
      <Contatct/>
    </main>
  );
}
