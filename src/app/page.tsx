import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import QualityProcess from "@/components/QualityProcess";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Products />
      <Services />
      <QualityProcess />
      <Testimonials />
      <Contact />
    </div>
  );
}
