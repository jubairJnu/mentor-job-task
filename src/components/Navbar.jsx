import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Badge,
  Avatar,
  Spinner,
} from "@nextui-org/react";
import { useState } from "react";
import GoogleLogin from "./home/GoogleLogin";
import { useSelector } from "react-redux";
import { CurrentToken, CurrentUser } from "../redux/features/auth/authSlice";
import LogOut from "./home/LogOut";

import { useGetUserInfoQuery } from "../redux/features/user/User.api";

const Header = () => {
  const user = useSelector(CurrentUser);
  const token = useSelector(CurrentToken);

  // get user info

  const { data: newUser, isLoading } = useGetUserInfoQuery(user && user.email);
  // console.log(newUser, "log user ingo");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Recipies", "Add Recipies"];
  const menuLinks = ["/", "/recipies", "/add-recipe"];
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] "
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Foodies</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className="font-semibold">
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="font-semibold">
          <Link href="/recipies" color="foreground" aria-current="page">
            Recipies
          </Link>
        </NavbarItem>
        <NavbarItem className="font-semibold">
          <Link color="foreground" href="/add-recipe">
            Add Recipies
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex items-center gap-5">
          {user && token ? (
            <>
              <LogOut />
              {isLoading ? (
                <Spinner color="primary" />
              ) : (
                newUser &&
                newUser.data && ( // Check if newUser and its properties are defined
                  <Badge content={newUser.data.coin} color="primary">
                    <Avatar radius="md" src={newUser.data.photoURL} />
                  </Badge>
                )
              )}
            </>
          ) : (
            <>
              <GoogleLogin />
            </>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={menuLinks[index]}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
