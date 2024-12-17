import NavBar from "@/components/navbar";
import Nav from "@/components/aids/Header";
import Hero from "@/components/aids/Hero"
import How from "@/components/aids/works"
import Feature from "@/components/aids/Feature"
import Beneficiary from "@/components/aids/Beneficiary"
import Donors from "@/components/aids/Donors"
import Footer from "@/components/aids/Footer"

export default function Home() {
  return (
    <main>
      <Nav />
      {/* <NavBar /> */}
      <Hero />
      <How />
      <Feature />
      <Beneficiary />
      <Donors />
      <Footer />
      
      {/* <section className="h-full flex items-center justify-center text-2xl font-semibold px-4">
        Yello
      </section> */}
    </main>
  );
}
