import Head from 'next/head'
import Header from '../components/molecule/Header'
import Molecule1 from '../components/molecule/Molecule1'

export default function Molecule() {


  return (
    <div className="App">
      <Head>
        <title>King components</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <main className="main">
        <div className="row">
          <div className="col-lg-12">
            <h3>Header</h3>
            <div className="row">
                <div className="col-lg-6">
                  <Header letGo={{}} />
                </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h3>Molecule 1</h3>
            <div className="row">
                <div className="col-lg-6">
                    <Molecule1 letGo={{style:{background:"#f7f7f7"}}}/>
                </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
