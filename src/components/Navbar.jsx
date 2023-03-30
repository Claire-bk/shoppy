import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShop } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

  return (
    <>
      <header className="flex items-center justify-between border-b border-gray-300 p-2">
        <Link to="/" className="flex items-center text-4xl text-brand">
          <AiOutlineShop className=" mr-1" />
          <h1>Shoppy</h1>
        </Link>
        <nav className="flex items-center gap-4 font-semibold">
          <Link to="/products">Products</Link>
          {user && <Link to="/carts">Carts</Link>}
          {user && user.isAdmin && (
            <Link to="/products/new" className="text-2xl">
              <GrEdit />
            </Link>
          )}
          {user && <User user={user} />}
          {!user && <button onClick={login}>Login</button>}
          {user && <button onClick={logout}>Logout</button>}
        </nav>
      </header>
    </>
  );
}
