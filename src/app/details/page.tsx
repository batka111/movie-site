"use client";

import Navigation from "@/components/HomeComponents/Navigation";
import Footer from "@/components/HomeComponents/Footer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Card from "@/components/HomeComponents/Card";
import { useState } from "react";

type Movie = {
  title: string;
  bottom: number;
  route: string;
  page?: number;
};
type Movie2 = {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
};

type MovieResponse = {
  results: Movie2[];
};

export default function Details() {
  const [datMovies, setDatMovies] = useState<Movie>();
  const [movies, setMovies] = useState<MovieResponse>({ results: [] });

  const url = `https://api.themoviedb.org/3/movie/similar?language=en-US&page=`;

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";
  const fetchMovies = () => {
    fetch(url, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => response.json())
      .then((data) => datMovies(data));
  };

  return (
    <div className="items-center flex gap-8 flex-col">
      <Navigation />
      <div className="flex flex-col gap-6">
        <div className="flex justify-between text-[#09090B] h-[72px] pr-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl font-bold">Wicked</h2>
            <p className="text-[18px] leading-7 font-normal">
              2024.11.26 · PG · 2h 40m
            </p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-xs font-medium">Rating</p>
            <div className="flex h-12 items-center gap-1 self-stretch">
              <div>
                <img src="/images/star.png" alt="" className="w-7 h-7" />
              </div>
              <div>
                <p>
                  <span className="text-[18px] text-[#09090B] font-semibold">
                    6.9
                  </span>
                  <span className="text-[16px] text-[#71717A]">/10</span>
                </p>
                <p className="text-xs">37k</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-8">
          <img
            src="/images/MoviePoster.png"
            alt=""
            className=" w-[290px] h-[428px]"
          />
          <img src="/images/wick.png" alt="" className="w-[760px] h-[428px]" />
        </div>
      </div>
      <div className="flex flex-col w-[1080px] items-start gap-5">
        <div className="flex gap-2.5">
          <Badge className="bg-white text-black rounded-full border border-solid border-[#E4E4E7] px-2.5 py-0.5">
            Fairy tale
          </Badge>
          <Badge className="bg-white text-black rounded-full border border-solid border-[#E4E4E7] px-2.5 py-0.5">
            Fairy tale
          </Badge>
          <Badge className="bg-white text-black rounded-full border border-solid border-[#E4E4E7] px-2.5 py-0.5">
            Fairy tale
          </Badge>
          <Badge className="bg-white text-black rounded-full border border-solid border-[#E4E4E7] px-2.5 py-0.5">
            Fairy tale
          </Badge>
          <Badge className="bg-white text-black rounded-full border border-solid border-[#E4E4E7] px-2.5 py-0.5">
            Fairy tale
          </Badge>
        </div>
        <p className="text-[16px] leading-6">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.
        </p>
        <div className="flex gap-1 flex-col">
          <div className="flex gap-[53px]">
            <h2 className="font-bold text-[16px]">Director</h2>
            <p>Jon M. Chu</p>
          </div>
          <Separator />
          <div className="flex gap-[53px]">
            <h2 className="font-bold text-[16px] w-16">Writer</h2>
            <p>Winnie Holzman · Dana Fox · Gregory Maguire</p>
          </div>
          <Separator />
          <div className="flex gap-[53px] w-[1080px]">
            <h2 className="font-bold w-16 text-[16px]">Stars</h2>
            <p>Cynthia Erivo · Ariana Grande · Jeff Goldblum</p>
          </div>
          <Separator />
        </div>
      </div>
      <div>
        {datMovies?.results?.slice(bottom, bottom + 10).map((movie) => {
          {
            return (
              <Card
                key={movie.id}
                title={movie.title}
                voteAverage={movie.vote_average}
                imageUrl={movie.poster_path}
              />
            );
          }
        })}
      </div>

      <Footer />
    </div>
  );
}
