
import InteractiveHeading from "./Titulo";
import NavBar from "./Navbar";
import Footer from "./Footer";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar/>
     
     <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <InteractiveHeading 
          text="RabuDev" 
          baseColor="text-white"
          hoverColor="text-blue-200"
          depthColor="text-blue-100"
          layers={25}
        />
      </main>
      <Footer/>
    </div>
  );
}
