import Head from 'next/head'
import Slider from '../components/molecule/Slider'

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>King components</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className="main" style={{minHeight:"100vh"}}>
       <Slider />
      </main>

    </div>
  )
}
