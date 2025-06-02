"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
      );

      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      {data &&
        data?.results?.map((todo) => {
          return (
            <Link href={`movies/${todo.id}`} key={todo?.id}>
              <div className="w-[200px] h-[50px] border border-pink-200 overflow-hidden hover:cursor-pointer">
                <div>{todo.title}</div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Page;
