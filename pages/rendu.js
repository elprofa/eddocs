import Head from 'next/head';
import { Row, Col, Container } from 'reactstrap';
import SectionNwsLtrt from '../components/molecule/SectionNewsLetter';
import SectionContact from '../components/molecule/SectionContact';
import SectionAdress from '../components/molecule/SectionAdress';

export default function Rendu() {
  return (
    <div className="App">
      <Head>
        <title>Teste components</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <SectionContact />
      <SectionNwsLtrt />
      <SectionAdress />
    </div>
  )
}