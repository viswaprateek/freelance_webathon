import React from "react";
import NavBar from "../_components/navbar";
import { currentUser } from "@/lib/auth";
import { ExtendedUser } from "@/schemas";
<<<<<<< HEAD
import HomePage from "./_components/HomePage";
=======
import { getActiveProducts } from "@/lib/server-actions";
import ActiveProducts from "../_components/active-products";
>>>>>>> upstream/main

const Home = async () => {
  const user = (await currentUser()) as ExtendedUser;
  console.log(user);
  const activeProducts = await getActiveProducts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-200">
      <NavBar />
<<<<<<< HEAD
      <HomePage />
=======
>>>>>>> upstream/main
    </div>
  );
};

export default Home;
