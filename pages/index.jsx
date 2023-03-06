import Current from "@/components/Current"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Nav from "@/components/Nav"
import News from "@/components/News"

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-[70px] sm:h-[80px] md:h-[84px] lg:mb-16"></div>
      <Hero />
      <Current />
      <News />
      <Nav />
      <Footer />
    </>
  )
}
