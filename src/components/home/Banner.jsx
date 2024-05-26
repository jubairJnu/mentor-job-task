import { Button } from "@nextui-org/button";
import bannerImg from "../../assets/banner2.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
      <img src={bannerImg} alt="banner" className="md:py-6 py-12 " />
      <div className="flex gap-10 absolute top-1/2 right-10 md:right-28">
        <Link to="/recipies">
          <Button color="secondary">See recipes</Button>
        </Link>
        <Link to="/add-recipe">
          <Button color="danger">Add Recipes</Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
