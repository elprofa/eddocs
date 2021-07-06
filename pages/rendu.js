import Head from 'next/head'
import Slider from '../components/molecule/Slider'
import Example from '../components/molecule/FormContact'

export default function Rendu() {
  return (
    <div className="App">
      <Head>
        <title>Teste components</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className="main" style={{minHeight:"100vh"}}>
       
      </main>
      <Example />
    </div>
  )
}