import { HeartIcon, StarIcon } from "lucide-react";
import React from "react";

function RecommendedBooks() {
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
        <h3 className="text-lg font-bold">The Alchemist</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Paulo Coelho</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">4.9</span>
          </div>
          <span className="text-sm font-medium">$8.99</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <button size="sm" variant="outline">
            <HeartIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecommendedBooks;
