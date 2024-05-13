import Image from "next/image";
import Header from "./components/header"
import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Preloader from "./components/preloader";


export default function Home() {
  return (

    <>
    <Preloader />
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
     <div className="lg:flex lg:justify-between lg:gap-4">
      
       <Header />

      <main id="content" className="overflow-y-auto pt-24 lg:w-1/2 lg:py-24 flex flex-col gap-4 h-full">
       <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"><About /></section>
       <section id="projects" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"><Projects /></section>
       <section id="experience" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"><Experience /></section>
       <footer id="footer" className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0"><Footer /></footer>
       </main>
      </div>
    </div>
    </>
  );
}
