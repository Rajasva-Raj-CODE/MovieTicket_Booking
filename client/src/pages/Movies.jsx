import React from "react";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "../components/MovieCard";
import BlurCircle from "../components/BlurCricle";
const Movies = () => {
  return dummyShowsData.length > 0 ? (
    <div className="relative my-32 mb-60 px-4 md:px-16 lg:px-40 xl:px-56 overflow-hidden min-h-[80vh]">
      <BlurCircle top="120px" left="-80px" />
      <BlurCircle bottom="-60px" right="-60px" />
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg mb-12 tracking-tight">
        Now Showing
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {dummyShowsData.map((movie) => (
          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-3xl bg-white/10 backdrop-blur-md p-2">
            <MovieCard movie={movie} key={movie.id} />
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1]">
        <div className="w-96 h-96 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 opacity-30 rounded-full blur-3xl absolute -top-32 -left-32 animate-pulse" />
        <div className="w-80 h-80 bg-gradient-to-tr from-yellow-300 via-pink-300 to-red-400 opacity-20 rounded-full blur-2xl absolute -bottom-24 -right-24 animate-pulse" />
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 mb-4">No movies available</h1>
      <p className="text-lg text-gray-300">Please check back later!</p>
    </div>
  );
};

export default Movies;
