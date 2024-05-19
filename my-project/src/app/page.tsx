"use Client";
import Search from "../../components/Search";
import Navbar from "../../components/Navbar";
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
    </>
  );
}
