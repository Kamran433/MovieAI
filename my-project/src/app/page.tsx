import Search from "../../components/Search";
import Navbar from "../../components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="jagga flex flex-col  justify-center items-center">
        <Search />
      </div>
    </>
  );
}
