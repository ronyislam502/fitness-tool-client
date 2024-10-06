import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/Drawer";

const Navbar = () => {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/products",
      name: "Products",
    },
    {
      path: "/product-management",
      name: "Management",
    },
    {
      path: "/about-us",
      name: "About",
    },
  ];
  return (
    <div className="h-[60px] flex justify-between items-center lg:px-[60px] px-5 py-2">
      <Link to={"/"} className="flex gap-x-2 items-center">
        <p className="text-3xl font-bold">
          <span className="text-green-600">Fitness</span>{" "}
          <span className="text-red-600">Tools</span>
        </p>
      </Link>
      <div className="md:flex items-center gap-x-6 font-medium hidden">
        {links?.map((menu, idx) => (
          <Link key={idx} to={menu?.path}>
            {menu?.name}
          </Link>
        ))}
        <Link
          to="/cart"
          className="flex items-center text-emerald-500 font-bold"
        >
          <FaCartPlus />
        </Link>
      </div>
      <div className="md:hidden block">
        <Drawer direction="right">
          <DrawerTrigger>
            <IoMenu className="text-2xl" />{" "}
          </DrawerTrigger>
          <DrawerContent>
            <DrawerClose className="flex justify-end m-2">
              <AiOutlineCloseSquare className=" text-3xl p-1" />
            </DrawerClose>
            <div className="flex flex-col w-[200px] gap-y-3 font-medium px-4">
              {links?.map((menu, idx) => (
                <Link key={idx} to={menu?.path}>
                  {menu?.name}
                </Link>
              ))}
              <Link to="/cart" className="flex items-center text-primaryColor">
                Cart <FaCartPlus className="ms-1" />{" "}
              </Link>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
