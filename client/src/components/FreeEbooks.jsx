import axios from "axios";
import React, { useEffect, useState } from "react";

function FreeEbooks() {
  const [freeEbooks, setFreeEbooks] = useState([]);

  useEffect(() => {
    const fetchFreeEbooks = async () => {
      const response = await axios.get("http://localhost:3000/api/free-ebooks");
      setFreeEbooks(response.data);
    };
    fetchFreeEbooks();
  }, []);
  console.log(freeEbooks);
  return (
    <>
      {freeEbooks?.map((item) => {
        return (
          <div
            className="bg-white rounded-lg overflow-hidden shadow-md"
            key={item.id}
          >
            <img
              alt="Author"
              className="w-full h-40 object-contain"
              height={200}
              src={item.volumeInfo?.imageLinks?.smallThumbnail}
              style={{
                aspectRatio: "200/200",
              }}
              width={200}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">
                {item.volumeInfo.title || item.volumeInfo.authors}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.volumeInfo.categories}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FreeEbooks;
