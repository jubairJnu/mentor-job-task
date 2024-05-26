/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/button";
import {
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  useDisclosure,
} from "@nextui-org/react";
import { usePurchaseCoinMutation } from "../../redux/features/user/User.api";
import { useSelector } from "react-redux";
import { CurrentUser } from "../../redux/features/auth/authSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PurchaseModal = ({ price, coin }) => {
  const user = useSelector(CurrentUser);
  const navigate = useNavigate();

  const [purchaseNew, { isLoading }] = usePurchaseCoinMutation();

  if (isLoading) {
    <Spinner color="danger" />;
  }

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // handle purchase

  const handlePurchase = async () => {
    try {
      const purchaseData = {
        email: user.email,
        data: parseInt(coin, 10),
      };

      console.log(purchaseData, "data");

      const res = await purchaseNew(purchaseData);
      console.log(res);

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
          title: "Purchased successfully",
        });

        navigate("/recipies");
      }
    } catch (error) {
      console.log(error);
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
        title: `${error?.data?.message || "Something Went Wrong"}`,
      });
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="danger">
        Pay ${price}
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Enter Your Card Number
              </ModalHeader>
              <ModalBody>
                <Input label="You can enter any number" required />
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  className="bg-[#5c37e0] shadow-lg shadow-indigo-500/20 text-white"
                  onClick={handlePurchase}
                  onPress={onClose}
                >
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PurchaseModal;
