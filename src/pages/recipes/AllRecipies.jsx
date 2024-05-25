
import { useGetAllRecipesQuery } from "../../redux/features/receipes/Recipe.api";
import RecipiesCard from "./RecipiesCard";

const AllRecipies = () => {
  const { data: receipes } = useGetAllRecipesQuery();
  console.log(receipes);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-5">All Recipies</h1>

      <div className="mt-10 w-full flex flex-col gap-5">
        {receipes?.data?.map((recipe) => (
          <RecipiesCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default AllRecipies;
