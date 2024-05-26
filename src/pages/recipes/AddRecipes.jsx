import {
  Button,
  Input,
  Select,
  SelectItem,
  Spinner,
  Textarea,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { recipeCategories } from "./RecipeCategories";
import { useSelector } from "react-redux";
import { CurrentUser } from "../../redux/features/auth/authSlice";
import { useState } from "react";
import { useCreteRecipesMutation } from "../../redux/features/receipes/Recipe.api";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_IMG_KEY;

const AddRecipes = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [addRecipes] = useCreteRecipesMutation();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const user = useSelector(CurrentUser);
  const creatorEmail = user?.email;
  // console.log(creatorEmail);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // const onSubmit =async (data) => {
  //   console.log("clicked");
  //   setIsLoading(true);
  //   const { name, category, country, details, youtube } = data;

  //   const formData = new FormData();
  //   formData.append("image", data.photo[0]);
  //   fetch(img_hosting_url, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((responseImage) =>{
  //       const imageUrl = responseImage.data.display_url;
  //       console.log(imageUrl, "img");
  //       const recipeData = {
  //         name,
  //         category,
  //         country,
  //         details,
  //         youtube,
  //         creatorEmail: user?.email,
  //         watchCount: 0,
  //         purchased_by: [],
  //         photoUrl: imageUrl,
  //       };

  //       // here add

  //     const res = await addRecipes(recipeData)

  //       console.log(recipeData, "recipe data");
  //     });

  //   console.log(data);
  // };

  const onSubmit = async (data) => {
    console.log("clicked");
    setIsLoading(true);

    const { name, category, country, details, youtube } = data;

    const formData = new FormData();
    formData.append("image", data.photo[0]);

    try {
      // Upload the image
      const imgResponse = await fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      });
      const responseImage = await imgResponse.json();
      const imageUrl = responseImage.data.display_url;
      console.log(imageUrl, "img");

      // Prepare the recipe data
      const recipeData = {
        name,
        category,
        country,
        details,
        youtube,
        creatorEmail: user?.email,
        watchCount: 0,
        purchased_by: [],
        photoUrl: imageUrl,
      };

      // Add the recipe (assuming addRecipes is a function that handles this)
      const res = await addRecipes(recipeData);
      setIsLoading(false);
      if (res.data.success) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Added successfully",
        });
      }

      // console.log(res, "recipe data after save");
      reset();
      // Handle successful recipe addition here (e.g., show a success message)
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "Something went wrong",
      });
      // Handle error here (e.g., show an error message)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-10 w-full max-w-7xl px-5 mx-auto ">
      <h1 className="text-center text-2xl font-bold mb-5">Add Recipes</h1>

      {/* form here */}

      <div className="bg-gray-100 p-10 rounded">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex-1">
              <Input
                {...register("name")}
                type="text"
                label="Recipe Name"
                variant="bordered"
                className="w-full min-w-80 "
              />
            </div>
            <div className="flex-1">
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                {...register("photo")}
                className="border border-foreground-400 py-2 w-full px-3 rounded"
              />
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex-1 mt-8">
              <Input
                {...register("youtube")}
                type="text"
                label="Youtube Link"
                variant="bordered"
                className="w-full min-w-80 "
              />
            </div>
            <div className="flex-1">
              <Textarea
                variant="bordered"
                label="Recipe details "
                {...register("details")}
                labelPlacement="outside"
                placeholder="Enter your description"
                className="col-span-12 md:col-span-6 mb-6 md:mb-0 w-full min-w-80"
              />
            </div>
          </div>
          {/* 3 */}

          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-8">
            <div className="flex-1">
              <Input
                {...register("country")}
                type="text"
                label="Country"
                variant="bordered"
                className="w-full min-w-80 "
              />
            </div>
            <div className="flex-1">
              <Select
                label="Select Category"
                variant="bordered"
                className="w-full min-w-80 "
                {...register("category")}
              >
                {recipeCategories?.map((recipe) => (
                  <SelectItem key={recipe} value={recipe}>
                    {recipe}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>

          <Button
            color="primary"
            className="mt-10 w-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Button color="primary" isLoading>
                Loading
              </Button>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipes;
