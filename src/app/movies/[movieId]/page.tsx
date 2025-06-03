import Details from "@/app/details/page";
import Footer from "@/components/HomeComponents/Footer";
import Navigation from "@/components/HomeComponents/Navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@radix-ui/react-dropdown-menu";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

export default async function Page({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {
  const { movieId } = await params;
  console.log(movieId);

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const data = await response.json();
  console.log(data);

  const responser = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const datas = await responser.json();
  console.log(datas);

  return (
    <div className="items-center flex gap-8 flex-col">
      <Navigation />
      <div className="flex flex-col gap-6">
        <div className="flex justify-between text-[#09090B] h-[72px] pr-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl font-bold">{data.title}</h2>
            <p className="text-[18px] leading-7 font-normal">
              {data.release_date} <span>· PG ·</span>{" "}
              <span>{data.runtime}</span>
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
                    {data?.vote_average}
                  </span>
                  <span className="text-[16px] text-[#71717A]">/10</span>
                </p>
                <p className="text-xs">{data.vote_count}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-8">
          <img
            src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`}
            alt="poster"
            className=" w-[290px] h-[428px] rounded-sm"
          />
          <img
            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
            alt="poster"
            className=" w-[760px] h-[428px] rounded-sm"
          />
        </div>
      </div>
      <div className="flex flex-col w-[1080px] items-start gap-5">
        <div className="flex gap-2.5">
          {data?.genres?.map((genre) => {
            return (
              <Badge
                className="bg-white text-black rounded-full border border-solid border-[#E4E4E7] px-2.5 py-0.5"
                key={genre.id}
              >
                {genre.name}
              </Badge>
            );
          })}
        </div>
        <p className="text-[16px] leading-6">{data.overview}</p>
        <div className="flex gap-1 flex-col">
          <div className="flex gap-[53px]">
            <h2 className="font-bold text-[16px]">Director</h2>
            {datas?.crew?.slice(0, 1)?.map((crewe) => {
              return <p key={crewe.id}>{crewe.name}</p>;
            })}
          </div>
          <Separator />
          <div className="flex gap-[53px]">
            <h2 className="font-bold text-[16px] w-16">Writer</h2>
            {datas.crew?.slice(0, 7).map((crews) => {
              return <p key={crews.id}>{crews.name}</p>;
            })}
          </div>
          <Separator />
          <div className="flex gap-[53px] w-[1080px]">
            <h2 className="font-bold w-16 text-[16px]">Stars</h2>
            {datas?.cast?.slice(0, 3).map((caster) => {
              return <p key={caster.id}>{caster.name}</p>;
            })}
          </div>
          <Separator />
        </div>
      </div>
      <Details />

      <Footer />
    </div>
  );
}
