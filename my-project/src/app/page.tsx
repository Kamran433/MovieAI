"use Client";
import Search from "../../components/Search";
import Navbar from "../../components/Navbar";
import Recommend from "../../components/Recommend";
import Movies from "../../components/Movies";
import TVShows from "../../components/TVShows";
import Crouv from "../../components/Crouv";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="jagga flex flex-col  justify-center items-center">
        <Crouv />
        <div className="z-10 mt-[18vh]">
          <img src="/logo.png" className="w-12 h-12"></img>
        </div>

        <h1 className="z-10 text-4xl font-bold text-black">
          Movie<span className="text-white">-AI</span>
        </h1>

        <Search />
      </div>
      <div className="recommend bg-black flex flex-col">
        <h1 className="text-bold mt-11 ml-20 text-white">Recommended</h1>
        <Recommend />
      </div>
      <div className="recommend bg-black flex flex-col">
        <h1 className="text-bold mt-11 ml-20 text-white">Top Movies</h1>
        <Movies />
      </div>
      <div className="recommend bg-black flex flex-col">
        <h1 className="text-bold mt-11 ml-20 text-white">Top TV-Shows</h1>
        <TVShows />
      </div>
    </>
  );
}
