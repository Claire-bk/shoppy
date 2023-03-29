import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className="flex flex-row items-center justify-between border-b-2 pb-2 mx-10 my-4">
        <div
          className="flex flex-row items-center text-xl"
          onClick={() => navigate("/")}
        >
          <AiOutlineShop className="text-brand mr-1" />
          <h1 className="text-brand">Shoppy</h1>
        </div>
        <ul className="flex flex-row items-center gap-4 text-base">
          <li onClick={() => navigate("/products")}>Products</li>
          <li onClick={() => navigate("/carts")}>Carts</li>
          <li onClick={() => navigate("/products/new")}>
            <GrEdit />
          </li>
          <li>Login</li>
        </ul>
      </header>
    </>
  );
}
