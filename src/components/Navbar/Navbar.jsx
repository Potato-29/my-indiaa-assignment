import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import LinkButton from "../LinkButton/LinkButton";
import { navbarMenus } from "../../constants/navbarMenus";
import Badge from "../Badge/Badge";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => (state ? state.cart.items : []));
  return (
    <div className="w-100 flex flex-row justify-between items-center p-5 shadow-lg sticky top-0 z-10 bg-white">
      <div className="hover:bg-slate-200 transition-all duration-500 rounded-lg p-2 cursor-pointer">
        <h6>LOGO</h6>
      </div>
      <div className="flex flex-row">
        {navbarMenus.map((menu, index) => (
          <div className="mx-2" key={`nav-${index}`}>
            <LinkButton text={menu.title} href={menu.link} />
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-row">
          <Badge
            count={cart.length}
            component={
              <FaShoppingCart
                onClick={() => navigate("/cart")}
                color="black"
                className="text-4xl text-black hover:bg-slate-200 transition-all duration-500 rounded-lg p-2 cursor-pointer"
              />
            }
          />
          <FaUser
            color="black"
            className="text-4xl text-black hover:bg-slate-200 transition-all duration-500 rounded-lg p-2 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
