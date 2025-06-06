"use client";
import {
  Moon,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Search,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
// const genreUrl = `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds}&page=${page}`;
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";
const Navigation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchGenreData();
  }, []);

  const fetchGenreData = () => {
    fetch(url, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => response.json())
      .then((data) => setData(data.genres));
  };

  return (
    <div className="h-[60px] flex justify-between items-center container px-5">
      <Link href={"/"}>
        <div className="flex  gap-2 items-center">
          <img src="/images/film.png" alt="logo" className=" w-5 h-5 " />
          <p className=" text-[16px] text-indigo-700 font-bold italic">
            Movie Z
          </p>
        </div>
      </Link>
      <div className="flex gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-white text-black hover:bg-white border-[#E4E4E7] border">
              <ChevronDown />
              Genre
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-5 w-[577px]">
            <DropdownMenuLabel className=" gap-1 flex flex-col">
              <p className="text-2xl font-semibold">Genres</p>
              <p className="text-[16px]">See lists of movies by genre</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="my-4" />
            <DropdownMenuGroup className="flex gap-4 flex-wrap w-full">
              {data?.map(({ id, name }) => {
                return (
                  <DropdownMenuItem
                    className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit"
                    key={id}
                  >
                    {name}
                    <ChevronRight />
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-2.5 border px-3 rounded-md border-[#E4E4E7] relative">
          <Search color="gray" />
          <input
            type="text"
            placeholder="Search...."
            className=" focus:outline-0"
          />
          <div className="absolute w-[577px] flex flex-col p-3 border border-solid top-[40px] z-10 left-[-200px] rounded-lg border-[#E4E4E7] bg-[#fff]">
            <div className="flex gap-3 p-2">
              <img
                src="/images/wick.png"
                alt=""
                className="w-[67px] h-[100px] rounded-md"
              />
              <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                  <h2>Wicked</h2>
                  <p className="flex items-center">
                    <img src="/images/star.png" alt="" className="w-4 h-4" />
                    6.9 <span>/10</span>
                  </p>
                </div>
                <div className="flex justify-between self-stretch items-start w-[454px]">
                  <p>2024</p>
                  <button className=" cursor-pointer flex items-center gap-2 px-4 py-2 ">
                    <p>See more</p>
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="border cursor-pointer border-[#E4E4E7] h-9 w-9 rounded-md flex justify-center items-center">
        <Moon size={20} strokeWidth={2} />
      </button>
    </div>
  );
};

export default Navigation;
