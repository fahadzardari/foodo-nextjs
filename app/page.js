import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
export default function Home() {
  return (
    <>
      <div className="bg-gray-100 pb-10 w-full">
        <NavBar />
        <Hero />
      </div>
    </>
  );
}
