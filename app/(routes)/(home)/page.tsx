import Image from "next/image";



export default function Home() {
  return (
    <div className="flex flex-col w-24">
      <img src="/seoimg.jpg" alt="" />
      <Image src="/seoimg.jpg" width={123} height={123} alt="blabber"></Image>
    </div>

  );
}
