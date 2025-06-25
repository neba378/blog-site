import Hero from "@/components/Hero";
import Add from "@/components/Add";
// import Featured from "@/components/Featured";
import Recent from "@/components/Recent";
import Popular from "@/components/Popular";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Featured /> */}
      <Recent />
      <Popular />
      <Add />
    </>
  );
}
