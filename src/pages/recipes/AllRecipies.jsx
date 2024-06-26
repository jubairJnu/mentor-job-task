import { Input } from "@nextui-org/input";
import { useGetAllRecipesQuery } from "../../redux/features/receipes/Recipe.api";
import RecipiesCard from "./RecipiesCard";
import { Select, SelectItem } from "@nextui-org/select";
import { recipeCategories } from "./RecipeCategories";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const AllRecipies = () => {
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  const searchData = {
    name: name,
    category: category,
    page: page,

    country: country,
  };
  // console.log(searchData, "search");
  const {
    data: receipes,
    isLoading,
    isFetching,
  } = useGetAllRecipesQuery(searchData && searchData);
  // console.log(receipes, "recipe");
  // console.log(name, "name", country, "cour", category, "cate");

  let timeoutId;

  const handleNameChange = (e) => {
    const searchName = e.target.value;
    clearTimeout(timeoutId); // Clear previous timeout
    timeoutId = setTimeout(() => {
      setName(searchName); // Set name after delay
    }, 500); // Set a delay of 500 milliseconds
  };

  const handleCountryChange = (e) => {
    const searchCountry = e.target.value;
    clearTimeout(timeoutId); // Clear previous timeout
    timeoutId = setTimeout(() => {
      setCountry(searchCountry); // Set name after delay
    }, 500); // Set a delay of 500 milliseconds
  };

  useEffect(() => {
    if (receipes && receipes.data.data) {
      if (page === 1) {
        // If it's the first page, set the items directly
        setItems(receipes.data.data);
      } else {
        // If it's not the first page, append the new items to the existing ones
        setItems((prevItems) => [...prevItems, ...receipes.data.data]);
      }
    }
  }, [receipes, page]);

  // clear if chage

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const filteredItemsSet = new Set();
  items.forEach((recipe) => {
    if (
      recipe.name.toLowerCase().includes(name.toLowerCase()) &&
      recipe.country.toLowerCase().includes(country.toLowerCase()) &&
      (category ? recipe.category === category : true)
    ) {
      filteredItemsSet.add(recipe._id); 
    }
  });

  
  const filteredItems = Array.from(filteredItemsSet).map((id) =>
    items.find((recipe) => recipe._id === id)
  );

  const hasMore = items.length < receipes?.data?.totalCount;

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-5">All Recipies</h1>

      {/* search here */}

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full max-w-7xl px-5 mx-auto">
        <Input
          label="Search By Title"
          isClearable
          radius="lg"
          color="primary"
          placeholder="Type to search..."
          onChange={handleNameChange}
        />
        <Input
          label="Country"
          isClearable
          radius="lg"
          color="danger"
          placeholder="Type to search..."
          onChange={handleCountryChange}
        />
        <Select
          label="Select Category"
          variant="bordered"
          className="w-full min-w-80 "
          color="secondary"
          onChange={(e) => setCategory(e.target.value)}
        >
          {recipeCategories?.map((recipe) => (
            <SelectItem key={recipe} value={recipe}>
              {recipe}
            </SelectItem>
          ))}
        </Select>
      </div>
      <h1 className="text-lg font-bold text-foreground-500 px-10 pt-5">
        Total Recipes: {receipes?.data?.totalCount}{" "}
      </h1>
      {isFetching && page === 1 ? (
        <Spinner color="primary" className="text-center" />
      ) : receipes?.data?.totalCount >= 10 ? (
        <InfiniteScroll
          dataLength={items?.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4 className="text-center text-lg font-bold">Loading...</h4>}
          endMessage={
            <p className="text-white text-lg font-bold text-center bg-primary py-2 w-60 my-2 mx-auto rounded-lg">
              All Recipes loaded
            </p>
          }
        >
          <div className="mt-10 w-full flex flex-col gap-5">
            {filteredItems?.map((recipe) => (
              <RecipiesCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <div className="mt-10 w-full flex flex-col gap-5">
          {filteredItems?.map((recipe) => (
            <RecipiesCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRecipies;
