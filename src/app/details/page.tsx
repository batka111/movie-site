"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  useState,
  useEffect,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import MoreLikeThis from "../seeMore/more_like/page";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

const Details = (id: number) => {
  const [data, setData] = useState([]);
  console.log(id.id);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id.id}/similar?language=en-US&page=1`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-[24px] font-semibold">More like this</h1>
        <Link href={"/seeMore/more_like"}>
          <div className="flex">
            <p>See more</p>
            <ArrowRight />
          </div>
        </Link>
      </div>
      <div className=" grid sm:grid-cols-3 grid-cols-2 xl:grid-cols-5 md:grid-cols-4 auto-rows-auto gap-8 ">
        {data &&
          data?.results?.slice(0, 5)
            .map(
              (data: {
                id: Key | null | undefined;
                poster_path: any;
                vote_average:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactPortal
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
                title:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactPortal
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }) => {
                return (
                  <Link href={`/movies/${data.id}`} key={data?.id}>
                    <div>
                      <div className="h-fit  rounded-md w-[190px]">
                        <img
                          src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`}
                          alt="poster"
                          className=" rounded-t-md"
                        />
                        <div className=" px-3 py-2 gap-1 flex flex-col bg-gray-100 h-[96px]  rounded-md">
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
              }
            )}
      </div>
    </div>
  );
};

export default Details;
