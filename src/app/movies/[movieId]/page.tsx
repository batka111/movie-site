const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

export default async function Page({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {
  const { movieId } = await params;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${movieId}`
  );

  const data = await response.json();
  return (
    <div>
      <h2>{data.userId}</h2>
      <h2>{data.title}</h2>
    </div>
  );
}
