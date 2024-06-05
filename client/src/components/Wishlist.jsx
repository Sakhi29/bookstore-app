import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthProvider";
import axios from "axios";

function Wishlist() {
  const [wishlistItems, setWishListItems] = useState([]);
  const { user } = UserAuth();

  console.log(user);
  const fetchWishlist = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/wishlist", {
        headers: {
          Authorization: `Bearer ${user.tokenId}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      setWishListItems(response.data);
    } catch (error) {
      console.error("Error fetching wishlist items:", error);
      return [];
    }
  };

  useEffect(() => {
    if (user.tokenId) {
      fetchWishlist();
    }
  }, [user]);

  console.log(wishlistItems);
  return (
    <div className="flex flex-col-1 mt-4">
      {wishlistItems?.map((item) => {
        return (
          <div
            className="bg-white rounded-lg overflow-hidden shadow-md"
            key={item._id}
          >
            <img
              alt="Author"
              className="w-full h-40 object-contain"
              height={200}
              src={item.thumbnail || "No image available"}
              style={{
                aspectRatio: "200/200",
              }}
              width={200}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <h3 className="text-lg font-bold">{item.authors}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Wishlist;
