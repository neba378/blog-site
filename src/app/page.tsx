import Hero from "@/components/Hero";
import Popular from "@/components/Popular";
import Recent from "@/components/Recent";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Featured /> */}
      <Recent />
      <Popular />
    </>
  );
}
