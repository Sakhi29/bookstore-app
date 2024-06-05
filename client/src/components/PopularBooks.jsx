import { HeartIcon, ShoppingCartIcon, StarIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserAuth } from "../context/AuthProvider";

function PopularBooks() {
  const [popularBooks, setPopularBooks] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    const fetchPopularBooks = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/popular-books"
      );
      setPopularBooks(response.data);
    };
    fetchPopularBooks();
  }, []);

  return (
    <>
      {popularBooks?.map((item) => {
        return (
          <div
            className="bg-white rounded-lg overflow-hidden shadow-md"
            key={item.id}
          >
            <img
              alt="Book"
              className="w-full h-56 object-contain"
              height={300}
              src={item.volumeInfo.imageLinks.smallThumbnail}
              style={{
                aspectRatio: "200/300",
              }}
              width={200}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.volumeInfo.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.volumeInfo.authors}
              </p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1">
                  <StarIcon className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">4.6</span>
                </div>
                <span className="text-sm font-medium">
                  Rs. {item.saleInfo.listPrice?.amount || "Free"}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={async () => {
                    if (user && user.tokenId) {
                      const wishlistItem = {
                        title: item.volumeInfo.title,
                        authors: item.volumeInfo.authors,
                        description: item.volumeInfo.description,
                        thumbnail: item.volumeInfo.imageLinks.smallThumbnail,
                        amount: item.saleInfo.listPrice?.amount || "Free",
                      };
                      try {
                        const data = await axios.post(
                          "http://localhost:3000/api/wishlist",
                          wishlistItem,
                          {
                            headers: {
                              Authorization: `Bearer ${user.tokenId}`,
                              "Content-Type": "application/json",
                            },
                          }
                        );
                        console.log(data.body);
                        if (data.status === 200) {
                          console.log("Wishlist item added");
                        } else {
                          console.log("Error while adding item");
                        }
                      } catch (error) {
                        console.log(error);
                      }
                    }
                  }}
                  size="sm"
                  variant="outline"
                >
                  <HeartIcon className="h-4 w-4" />
                  <span className="sr-only">Add to favorites</span>
                </button>
                {/* <button size="sm" variant="solid">
                  <ShoppingCartIcon className="h-4 w-4 mr-2" />
                  Add to cart
                </button> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PopularBooks;
