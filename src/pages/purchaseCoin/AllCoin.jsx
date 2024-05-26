import { Button } from "@nextui-org/button";

import coinImg from "../../assets/coin.png";
import PurchaseModal from "./PurchaseModal";

const coinInfo = [
  {
    coin: "100",
    amount: 1,
  },
  {
    coin: "500",
    amount: 5,
  },
  {
    coin: "1000",
    amount: 10,
  },
];

const AllCoin = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-5 ">
      <h1 className="text-center font-bold text-3xl my-8 border-b pb-2">Purchase Your Coin</h1>

      <div className="my-5 grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 justify-items-center">
        {/* 1st */}
        {coinInfo?.map((coin, index) => (
          <div
            key={index}
            className={`${
              index === 1
                ? "bg-gradient-to-tr from-[#1B2845]  to-[#274060]  "
                : "bg-gradient-to-tr from-[#ffffff]  to-[#eeeeec] "
            } text-center rounded-md w-full max-w-80 shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] relative`}
          >
            <img
              src={coinImg}
              alt="coin"
              className="w-24 mx-auto absolute -top-10 left-1/2 transform -translate-x-1/2"
            />

            <p className={`text-xl font-bold ${index === 1 ? "text-white ":"text-foreground-700"} mt-10`}>
              {coin?.coin} coin
            </p>
            {/* <p className="text font-bold text-foreground-600">Upgrate Coin To Purchase Recipe</p> */}
            <div className="pt-5 pb-1">
              <PurchaseModal price={coin?.amount} coin={coin?.coin} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCoin;
