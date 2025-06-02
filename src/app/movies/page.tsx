"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

const Page = ({ title }) => {
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
    <div className=" grid sm:grid-cols-3 grid-cols-2 xl:grid-cols-5 md:grid-cols-4 auto-rows-auto gap-8">
      {data &&
        data?.results?.slice(5, 10).map((data) => {
          return (
            <Link href={`movies/${data.id}`} key={data?.id}>
              <div>
                <div className="h-fit  rounded-md">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`}
                    alt={title}
                    className=" rounded-t-md"
                  />
                  <div className=" px-3 py-2 gap-1 flex flex-col bg-gray-100 h-[96px] w-[300px] rounded-md">
                    <div className="flex items-center gap-1">
                      <img
                        src="/images/star.png"
                        alt="star"
                        className="size-4"
                      />
                      <div className="flex items-center">
                        <p>{data.vote_average}</p>
                        <p className=" leading-[16px]  text-[12px] text-[#71717A]">
                          /10
                        </p>
                      </div>
                    </div>
                    <p>{data.title}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Page;
