import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Badge,
  Avatar,
} from "@nextui-org/react";
import { useState } from "react";
import GoogleLogin from "./home/GoogleLogin";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Recipies", "Add Recipies"];
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
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className="font-semibold">
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="font-semibold">
          <Link href="#" color="foreground" aria-current="page">
            Recipies
          </Link>
        </NavbarItem>
        <NavbarItem className="font-semibold">
          <Link color="foreground" href="#">
            Add Recipies
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex items-center gap-5">
          <GoogleLogin />

          <Badge content="5" color="primary">
            <Avatar
              radius="md"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
          </Badge>
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
              href="#"
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
