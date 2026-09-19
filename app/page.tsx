import { Header } from "@/components/layout/Header";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Experience />
      </main>
    </>
  );
}
