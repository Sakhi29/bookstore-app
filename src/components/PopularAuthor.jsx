import React from "react";

function PopularAuthor() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img
        alt="Author"
        className="w-full h-40 object-cover"
        height={200}
        src="/placeholder.svg"
        style={{
          aspectRatio: "200/200",
          objectFit: "cover",
        }}
        width={200}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">J.K. Rowling</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Fantasy, Fiction
        </p>
      </div>
    </div>
  );
}

export default PopularAuthor;
