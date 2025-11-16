import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Highlights } from "@/components/Highlights";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <ContactFooter />
    </main>
  );
}
