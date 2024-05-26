import CountUp from "react-countup";
import { useGetAllHomeDataQuery } from "../../redux/features/home/HomeApi";

const WhyUseUs = () => {
  const { data: homeData, isLoading } = useGetAllHomeDataQuery();

  return (
    <div className="  min-h-32 mb-10 border-b border-foreground-200  w-full max-w-7xl mx-auto">
      <h1 className="text-foreground text-[28px] font-bold text-center py-5">
        Why Use It!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10 w-full max-w-7xl mx-auto px-5 pb-5 mt-10">
        {/* user */}
        <div className="text-primary font-bold text-xl shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] p-10 rounded text-center border border-primary w-full max-w-52   ">
          <h1 className="text-foreground-600 mb-4 ">Total User</h1>
          <CountUp end={homeData?.data?.totalUser} duration={5} /> +
        </div>
        {/* recipes */}
        <div className="text-primary font-bold text-xl shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] p-10 rounded text-center border border-primary w-full max-w-52">
          <h1 className="text-foreground-600 mb-4">Total Recipes</h1>
          <CountUp end={homeData?.data?.totalRecipes} duration={5} /> +
        </div>
        <div className="text-primary font-bold text-xl shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] p-10 rounded text-center border border-primary w-full max-w-52   ">
          <h1 className="text-foreground-600 mb-4 ">Lowest Price</h1>
          <CountUp end={10} duration={5} /> +
        </div>
      </div>
    </div>
  );
};

export default WhyUseUs;
