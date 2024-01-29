import Image from "next/image";
import { Arrivals, Brands, HeroSection, Poster, Favourite, Application } from "./components";


export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <Brands/>
      <Arrivals/>
      <Poster/>
      <Favourite/>
      <Application/>
    </main>
  );
}
