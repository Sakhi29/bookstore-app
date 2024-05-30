import { HeartIcon, ShoppingCartIcon, StarIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

function PopularBooks() {
  const [popularBooks, setPopularBooks] = useState([]);

  useEffect(() => {
    const fetchPopularBooks = async () => {
      const response = await axios.get("/api/popular-books");
      setPopularBooks(response.data);
    };
    fetchPopularBooks();
  }, []);
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img
        alt="Book"
        className="w-full h-56 object-cover"
        height={300}
        src="/placeholder.svg"
        style={{
          aspectRatio: "200/300",
          objectFit: "cover",
        }}
        width={200}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">The Kite Runner</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Khaled Hosseini
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">4.6</span>
          </div>
          <span className="text-sm font-medium">$11.99</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <button size="sm" variant="outline">
            <HeartIcon className="h-4 w-4" />
            <span className="sr-only">Add to favorites</span>
          </button>
          <button size="sm" variant="solid">
            <ShoppingCartIcon className="h-4 w-4 mr-2" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopularBooks;
