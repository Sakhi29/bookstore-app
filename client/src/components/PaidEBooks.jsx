import axios from "axios";
import { HeartIcon, StarIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

function PaidEBooks() {
  const [paidEbooks, setPaidEbooks] = useState([]);
  useEffect(() => {
    const fetchPaidEbooks = async () => {
      const response = await axios.get("http://localhost:3000/api/paid-ebooks");
      setPaidEbooks(response.data);
    };

    fetchPaidEbooks();
  }, []);
  return (
    <>
      {paidEbooks?.map((item) => {
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
                  <span className="text-sm font-medium">4.9</span>
                </div>
                <span className="text-sm font-medium">
                  Rs. {item.saleInfo.listPrice?.amount}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <button size="sm" variant="outline">
                  <HeartIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PaidEBooks;
