import Head from 'next/head';
import SectionNwsLtrt from '../components/molecule/SectionNewsLetter';
import SectionContact from '../components/molecule/SectionContact';
import SectionAdress from '../components/molecule/SectionAdress';
import BannerAcc from '../components/molecule/BannerAccreditation';
import SectionAccOne from '../components/molecule/SectionAcc__Un';

export default function Accreditations() {
  return (
    <div className="App">
      <Head>
        <title>Nos Accreditations</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <BannerAcc/>
      <SectionAccOne />
      <SectionContact />
      <SectionNwsLtrt />
      <SectionAdress />
    </div>
  )
}