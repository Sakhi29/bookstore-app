import { BookIcon, HomeIcon, SearchIcon, SettingsIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import FreeEbooks from "./FreeEbooks";
import PopularBooks from "./PopularBooks";
import PaidEBooks from "./PaidEBooks";
import { UserAuth } from "../context/AuthProvider";
import Dropdown from "./DropDown";

function Main() {
  const { googleSignOut } = UserAuth();
  const handleUserSignOut = async () => {
    try {
      await googleSignOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-950 text-gray-50 px-4 md:px-6 py-3 flex items-center justify-between">
        <Link className="flex items-center gap-2" href="#">
          <BookIcon className="h-6 w-6" />
          <span className="text-lg font-medium">Bookstore</span>
        </Link>
        <div className="flex items-center gap-4">
          <form className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              className="bg-gray-800 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Search books..."
              type="search"
            />
          </form>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8">
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}

          <Dropdown />

          <button
            onClick={handleUserSignOut}
            className="bg-[#121e3e] px-7 py-2 text-white rounded-lg"
          >
            Sign Out
          </button>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-[200px_1fr] bg-gray-100">
        <div className="bg-gray-950 text-gray-50 p-4 space-y-4">
          <Link
            className="flex items-center gap-2 hover:bg-gray-800 rounded-md px-3 py-2"
            href="#"
          >
            <HomeIcon className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link
            className="flex items-center gap-2 hover:bg-gray-800 rounded-md px-3 py-2"
            href="#"
          >
            <SearchIcon className="h-5 w-5" />
            <span>Search</span>
          </Link>
          <Link
            className="flex items-center gap-2 hover:bg-gray-800 rounded-md px-3 py-2"
            href="#"
          >
            <BookIcon className="h-5 w-5" />
            <span>My Books</span>
          </Link>
          <Link
            className="flex items-center gap-2 hover:bg-gray-800 rounded-md px-3 py-2"
            href="#"
          >
            <SettingsIcon className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </div>
        <main className="p-6 space-y-8">
          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#121e3e]">Free Ebooks</h2>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
                href="#"
              >
                View all
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
              <FreeEbooks />
            </div>
          </section>
          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#121e3e]">
                Popular Books
              </h2>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
                href="#"
              >
                View all
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              <PopularBooks />
            </div>
          </section>
          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#121e3e]">Paid EBooks</h2>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
                href="#"
              >
                View all
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              <PaidEBooks />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Main;
