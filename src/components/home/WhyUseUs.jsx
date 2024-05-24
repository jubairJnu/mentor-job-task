import CountUp from "react-countup";

const WhyUseUs = () => {
  return (
    <div className="  min-h-32 mb-10 border-b border-foreground-200">
      <h1 className="text-foreground text-[28px] font-bold text-center py-5">
        Why Use It!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 w-full max-w-7xl mx-auto px-5 pb-5">
        {/* user */}
        <div className="text-primary font-bold text-xl shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] p-10 rounded text-center border border-primary w-full max-w-52 ">
          <h1 className="text-foreground-600 mb-4">Total User</h1>
          <CountUp end={100} duration={5} /> +
        </div>
        {/* recipes */}
        <div className="text-primary font-bold text-xl shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] p-10 rounded text-center border border-primary w-full max-w-52">
          <h1 className="text-foreground-600 mb-4">Total Recipes</h1>
          <CountUp end={100} duration={5} /> +
        </div>
      </div>
    </div>
  );
};

export default WhyUseUs;
