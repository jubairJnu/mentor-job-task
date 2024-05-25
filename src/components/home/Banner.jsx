import { Button } from "@nextui-org/button";
import bannerImg from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
      <img src={bannerImg} alt="banner" />
      <div className="flex gap-10 absolute top-1/2 right-10 md:right-28">
        <Button color="secondary">See recipes</Button>
        <Link to="/add-recipe">
          <Button color="danger">Add Recipes</Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
