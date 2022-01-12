import Head from "next/head";
import Image from "next/image";
import SideBar from "../Components/SideBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotify 2.0</title>
      </Head>

      <main>
        {/* SideBar */} 
        <SideBar/>
        {/* Center */}
      </main>
    </div>
  );
}
