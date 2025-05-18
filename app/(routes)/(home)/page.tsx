"use client"
import useStore from "@/store/useStore";
import Image from "next/image";

export default function Home() {
  const setText = useStore((states) => states.setText)
  return (
    <div className="flex flex-col w-24">
      <Image src="/seoimg.jpg" width={123} height={123} alt="blabber"></Image>

      <div></div>
    </div>

  );
}
