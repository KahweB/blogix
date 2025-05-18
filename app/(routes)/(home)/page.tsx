"use client"
import useStore from "@/store/useStore";
import Image from "next/image";
import { Input } from "@/components/ui/input"

export default function Home() {
  const { setFooterText, setHeaderText, setText } = useStore()

  return (
    <div className="flex flex-col w-24">
      <Image src="/seoimg.jpg" width={123} height={123} alt="blabber"></Image>

      <div>
        <Input onChange={(e) => setHeaderText(e.target.value)} placeholder="change header text" className="w-100" />
        <Input onChange={(e) => setFooterText(e.target.value)} placeholder="change footer text" className="w-100" />
        <Input onChange={(e) => setText(e.target.value)} placeholder="change both texts" className="w-100" />
      </div>
    </div>

  );
}
