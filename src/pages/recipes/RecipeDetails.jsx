import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button, Image, Spinner } from "@nextui-org/react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  useGetSameCategoryRecipeQuery,
  useGetSingleRecipesQuery,
} from "../../redux/features/receipes/Recipe.api";

const RecipeDetails = () => {
  const [isLove, setIsLove] = useState(false);

  const handleLoveChange = () => {
    setIsLove((prev) => !prev);
  };

  const url = new URL(window.location.href);
  const pathname = url.pathname;
  const parts = pathname.split("/");
  const id = parts[2];
  const { data: recipeDetails, isLoading } = useGetSingleRecipesQuery(id && id);

  const category = recipeDetails && recipeDetails?.data?.category;
  // console.log(category, "ctt");
  const { data: sameCategoryRecipes, isLoading: categoryLoading } =
    useGetSameCategoryRecipeQuery(category);
  // console.log(sameCategoryRecipes, "same");

  if (isLoading) {
    <Spinner color="primary" />;
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-foreground-500 my-10">
        In Details of{" "}
        <span className="text-primary-400">{recipeDetails?.data?.name} </span>
      </h1>
      <Card className="py-4  w-full max-w-7xl mx-auto px-5 ">
        <div className="flex flex-col md:flex-row justify-between gap-10  items-start">
          <CardBody className="overflow-visible p-4 mx-auto  shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)]  rounded flex-1 ">
            <div className="flex flex-col md:flex-row gap-10">
              <Image
                alt="Card background"
                className="object-cover rounded-xl w-[400px] mx-auto"
                src={recipeDetails?.data?.photoUrl}
              />
              <div className="text-start">
                <h4 className="font-bold text-large text-foreground-700">
                  Recipe Name:{" "}
                  <span className="text-foreground-500">
                    {recipeDetails?.data?.name}
                  </span>
                </h4>
                <h4 className="font-bold text-large  text-foreground-700 my-4">
                  Category:{" "}
                  <span className="text-foreground-500">
                    {recipeDetails?.data?.category}
                  </span>
                </h4>
                <h4 className="font-bold text-large  text-foreground-700 my-4">
                  Country:{" "}
                  <span className="text-foreground-500">
                    {recipeDetails?.data?.country}
                  </span>
                </h4>
                <h4 className="font-bold text-lg  text-foreground-700 my-4">
                  Creator:{" "}
                  <span className="text-foreground-500 text-[16px]">
                    {recipeDetails?.data?.creatorEmail}
                  </span>
                </h4>

                <p className="my-3 font-bold ">Purchased By</p>
                {recipeDetails?.data?.purchased_by?.map((purchase) => (
                  <li key={purchase._id}> {purchase} </li>
                ))}
              </div>
            </div>
          </CardBody>
          <div className="flex-col items-end me-auto ">
            <iframe
              width="420"
              height="250"
              src={`https://www.youtube.com/embed/${recipeDetails?.data?.youtube}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="mt-3 font-bold">
              Total Watch :{" "}
              <span className="font-semibold">
                {recipeDetails?.data?.watchCount}
              </span>
            </p>
            <Button isIconOnly onClick={handleLoveChange} aria-label="Like">
              {isLove ? (
                <Button
                  isIconOnly
                  onClick={handleLoveChange}
                  color="danger"
                  aria-label="Like"
                >
                  <FaHeart />
                </Button>
              ) : (
                <FaRegHeart />
              )}
            </Button>
          </div>
        </div>
        <div className="border border-foreground-200 p-2 my-5 rounded-md">
          {recipeDetails?.data?.details}
        </div>
      </Card>

      {/* suggestion */}

      <div className="w-full max-w-7xl mx-auto px-5">
        <h1 className="text-2xl font-semibold text-center my-10">
          You may also purchase
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {categoryLoading ? (
            <Spinner color="danger" />
          ) : (
            sameCategoryRecipes?.data?.length > 0 &&
            sameCategoryRecipes?.data?.map((item) => (
              <div className=" gap-6 justify-items-center" key={item._id}>
                <Card
                  key={item._id}
                  isFooterBlurred
                  className="w-[160px] md:w-[250px] h-[170px] md:h-[240px] col-span-12 sm:col-span-5 flex"
                >
                  <CardHeader className="absolute z-10 top-1 flex-col items-start"></CardHeader>
                  <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src={item?.photoUrl}
                  />
                  <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div className="flex flex-col md:flex-row justify-between md:gap-4">
                      <div>
                        <p className="text-black text-tiny">{item?.name}</p>
                        <p className="text-black text-tiny">
                          {item?.category}.
                        </p>
                      </div>
                      <Button
                        className="text-tiny mt-1 md:mt-0"
                        color="primary"
                        radius="full"
                        size="sm"
                      >
                        Purchase Now
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
