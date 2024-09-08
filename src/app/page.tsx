import Image from "next/image";
import sniper from "../../public/assets/img.jpg"

export default function Home() {

 
  return (
    <main>
      <h2>Hello</h2>
      {/* Internal Image */}
      <Image src={sniper} alt="sniper" priority />
    </main>
  );
}
