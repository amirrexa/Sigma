// src/app/page.tsx
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Navbar } from "@/components/Navbar";
import Image from 'next/image'
import TrustedPartners from "./components/TrustedPartners";
import OurImpactInNumbers from "./components/OurImpactInNumbers";
import { PeopleBehindSigma } from "./components/PeopleBehindSigma";
import { ReadyToTransform } from "./components/ReadyToTransform";
import { Services } from "./components/Services";
import { FeedBackSpeaksVolumes } from "./components/FeedBackSpeaksVolumes";
import { LetsBuild } from "./components/LetsBuild";
import { BeTheFirst } from "./components/BeTheFirst";
import { Footer } from "@/components/Footer";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedPartners />
        <OurImpactInNumbers />
        <PeopleBehindSigma />
        <ReadyToTransform />
        <Services />
        <FeedBackSpeaksVolumes />
        <LetsBuild />
        <BeTheFirst />
      </main>
      <Footer />
    </>
  );
}