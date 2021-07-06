import Head from 'next/head';
import { Row, Col, Container } from 'reactstrap';
import Slider from '../components/molecule/Slider';
import SectionContact from '../components/molecule/SectionContact';

export default function Rendu() {
  return (
    <div className="App">
      <Head>
        <title>Teste components</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <SectionContact />
    </div>
  )
}