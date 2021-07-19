
import Head from "next/head";
import GrilleBlogLeft from "../components/molecule/GrilleBlogLeft";
import CardMinSection from "../components/molecule/SectionCardMin";
import Slider from "../components/molecule/Slider";
import { theme } from "../theme";
import SectionApropos from "../components/SectionApropos";
import GrilleBlog from "../components/molecule/SectionApropos";
export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Métrologie</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <main className="main" >
        <Slider />
        <GrilleBlog />
        <GrilleBlogLeft />
        <CardMinSection />
      </main>
    </div>
  );
}
