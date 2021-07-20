
import Head from 'next/head';
import { Row, Col, Container } from 'reactstrap';
import SectionNwsLtrt from '../components/molecule/SectionNewsLetter';
import SectionContact from '../components/molecule/SectionContact';
import SectionAdress from '../components/molecule/SectionAdress';
import SectionCmtNsContactez from '../components/molecule/CmtNsContactez';
import BannerContact from '../components/molecule/BannerContact';
import SectOneContact from '../components/molecule/SectionOneContact';
import SectionContactTwo from '../components/molecule/SectionContactTwo';
import AbonnezVs from '../components/molecule/AbonnezVs';
import LastSectContact from '../components/molecule/LastSectionContact';

export default function Rendu() {
  return (
    <div className="App">
      <Head>
        <title>Contacts-us</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <BannerContact/>
      <SectOneContact/>
      <SectionContactTwo/>
      <AbonnezVs/>
      <LastSectContact/>
      {/* <SectionCmtNsContactez />
      <SectionContact />
      <SectionNwsLtrt />
      <SectionAdress /> */}
    </div>
  )
}


