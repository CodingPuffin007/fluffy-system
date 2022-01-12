import Head from "next/head";
import Image from "next/image";
import SideBar from "../Components/SideBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
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
