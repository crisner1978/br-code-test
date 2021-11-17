import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
export default function Home() {

  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Bottle Rocket Next Code Test</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
      </Head>

      <Header />
      <Feed />

    </div>
  );
}
