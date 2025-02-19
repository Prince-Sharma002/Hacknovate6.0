import hacknovate from "../assets/hacknovate.png";

const NewspaperHeader = () => {
  return (
    <header className="w-full px-0 py-6 bg-prophet-gray bg-opacity-20">
      <div className="w-full mx-auto border-b-4 border-slate-800">
        <div className="flex items-center justify-between mb-4 animate-fadeIn">
          <div className="flex items-center space-x-2">
            <div className="w-16 h-16 bg-prophet-black text-prophet-gold flex items-center justify-center font-playfair font-bold">
              <div className="text-center leading-tight"></div>
            </div>
          </div>
        </div>

        <div
          className="text-center space-y-4 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center justify-center space-x-4">
            <img src={hacknovate} width={120} height={120} alt="logo" />
            <div className="flex-1 h-px bg-prophet-black border-y-2 border-slate-800"></div>
            <span>
              <img src={hacknovate} width={20} height={20} alt="logo" />
            </span>
            <span className="font-crimson text-xl font-serif">
              FLAGSHIP EVENT
            </span>

            <div className="flex-1 h-px bg-prophet-black border-y-2 border-slate-800"></div>
            {/* <span className="text-prophet-black italic font-crimson text-sm">
              spellbindingly orchestrated chronicle
            </span> */}
          </div>

          <h1 className="text-6xl md:text-8xl font-playfair font-black tracking-wider">
            <span className="text-prophet-black tracking-tight">HACKNO</span>
            <span className="text-prophet-gold text-amber-400 tracking-tight ">
              V
            </span>
            <span className="text-prophet-black tracking-tight">ATE 6.0</span>
          </h1>

          <div className="flex items-center justify-center space-x-4">
            <span className="text-prophet-black text-2xl">★</span>
            <p className="font-crimson text-prophet-black uppercase tracking-widest text-sm md:text-base text-center ">
              The Wizard World Beguiling Broadsheet of Choice
            </p>
            <span className="text-prophet-black text-2xl">★</span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default NewspaperHeader;
