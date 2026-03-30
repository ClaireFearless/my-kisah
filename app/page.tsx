import Countdown from '@/components/Countdown';
import Couple from '@/components/Couple';
import Gallery from '@/components/Gallery';


export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
      
      {/* SECTION HOME */}
      <section id="home" className="relative min-h-screen w-full flex flex-col">
        <div 
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: "url('/BG.jpg')" }} 
        />
        <div className="absolute inset-0 bg-black/30 -z-10" />

        {/* Navbar dengan Link Berfungsi */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-6 bg-white/90 backdrop-blur-md shadow-sm">
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">Onyy & Ye Shunguang</h1>
          <div className="flex gap-6 text-xs uppercase tracking-widest font-semibold text-gray-600">
            <a href="#home" className="hover:text-black transition-colors">Home</a>
            <a href="#couple" className="hover:text-black transition-colors">Couple</a>
            <a href="#gallery" className="hover:text-black transition-colors">Gallery</a>
          </div>
        </nav>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-20">
          <h2 className="font-[family-name:var(--font-cursive)] text-7xl md:text-9xl text-white drop-shadow-lg mb-4">
            Onyy & Ye Shunguang
          </h2>
          <p className="text-white tracking-[0.5em] font-medium text-sm md:text-lg uppercase opacity-90 mb-6">
            14 July 2045
          </p>
          <Countdown targetDate="2045-07-14T00:00:00" />
        </div>
      </section>

      <Couple />
      
      <Gallery />
      
    </main>
  );
}