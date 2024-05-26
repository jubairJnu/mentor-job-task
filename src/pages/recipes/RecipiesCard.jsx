/* eslint-disable react/prop-types */
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button, Image, Spinner } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "../../redux/features/auth/authSlice";
import {
  useGetUserInfoQuery,
  usePurchaseRecipeMutation,
} from "../../redux/features/user/User.api";
import Swal from "sweetalert2";

const RecipiesCard = ({ recipe }) => {
  const [purchaseRecipe, { isLoading }] = usePurchaseRecipeMutation();

  const navigate = useNavigate();

  const user = useSelector(CurrentUser);
  const { data: loggedUserInfo } = useGetUserInfoQuery(user?.email);
  // console.log(loggedUserInfo);

  const handleAccess = async (recipe) => {
    // at first check if user
    if (!user) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Please login first",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    // check the creator is the loggedUsr

    if (recipe.creatorEmail === user.email) {
      navigate(`/recipe/${recipe._id}`);
      return;
    }

    // check if the logged already purchase don't need validation
    if (recipe.purchased_by.includes(user.email)) {
      navigate(`/recipe/${recipe._id}`);
      return;
    }

    // if use have not enough coin
    if (loggedUserInfo?.data?.coin < 10) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Not enough coins. Please purchase more coins.",
        showConfirmButton: true,
      }).then(() => {
        navigate("/purchase-coins");
      });
      return;
    }

    // if all validation is ok

    Swal.fire({
      title: "Are you sure?",
      text: "You have to spend 10 coins to purchase the recipe",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sure!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const recipeData = {
          id: recipe._id,
          user: user.email,
          creatorEmail: recipe.creatorEmail,
        };

        try {
          // Await the result of the purchaseRecipe function
          const purres = await purchaseRecipe(recipeData);
          // console.log(purres);

          if (purres.data.success) {
            navigate(`/recipe/${recipe._id}`);
          }

          // Navigate to the recipe details page after the purchase is successful
        } catch (error) {
          // Handle any errors that occur during the purchase process
          console.error("Error purchasing recipe:", error);
          // Optionally, you can show an error message to the user using Swal.fire
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to purchase recipe. Please try again later.",
          });
        }
      }
    });

    // main close here
  };

  // console.log(recipe, "in card");
  return (
    <Card className="py-4  w-full max-w-7xl mx-auto px-5 ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
        <h4 className="font-bold text-large text-center">{recipe?.name}</h4>
      </CardHeader>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <CardBody className="overflow-visible py-2 mx-auto flex-1">
          <Image
            alt="Card background"
            className="object-cover rounded-xl w-[400px] mx-auto"
            src={recipe?.photoUrl}
          />
          <p className="mt-3 font-bold">
            Creator Email :{" "}
            <span className="font-semibold">{recipe?.creatorEmail}</span>
          </p>
          <p className="mt-3 font-bold">
            Country : <span className="font-semibold">{recipe?.country}</span>
          </p>

          <Button
            onClick={() => handleAccess(recipe)}
            color="danger"
            size="md"
            className="w-[200px] md:w-[400px] text-center  mt-2"
          >
            {isLoading ? <Spinner color="primary" /> : "View The Recipe"}
          </Button>
        </CardBody>
        <div className="flex-1 ms-4">
          <p className="my-3 font-bold ">Purchased By</p>
          {recipe?.purchased_by?.map((purchase) => (
            <li key={purchase._id}> {purchase} </li>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default RecipiesCard;
