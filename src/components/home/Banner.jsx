import { Button } from "@nextui-org/button";
import bannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <img src={bannerImg} alt="banner" />
      <div className="flex gap-10 absolute top-1/2 right-28">
        <Button color="secondary">See recipes</Button>
        <Button color="danger">Add Recipes</Button>
      </div>
    </div>
  );
};

export default Banner;
