import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import Image from 'next/image'

import links from '../data/links';
import logo from '../public/logo.png';
export default function Home() {
  return (
    <>
      <Head>
        <title>GDSC PESU RR</title>
        <meta name="title" content="GDSC PESU RR" />
        <meta name="author" content="GDSC PESU RR" />
        <meta name="description" content="GDSC PESU RR" />
        <meta name="keywords" content=" " />
        <link rel="canonical" href="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="GDSC PESU RR" />
        <meta property="og:description" content="GDSC PESU RR" />
        <meta property="og:image" content="./GDSC_card.webp" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="GDSC PESU RR" />
        <meta property="twitter:description" content="GDSC PESU RR" />
        <meta property="twitter:image" content="./GDSC_card.webp" />
      </Head>
      <nav className="navbar navbar-expand-lg my-3">
        <div className="content container">
          <div className="navbar-header d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Image src={logo} className="logo img-fluid mx-2" alt="Logo" />
              <Link className="navbar-brand" href="/GDSC_card.webp">
                Google Developer Student Club
              </Link>
            </div>
          </div>
          <div className="text-center mt-2">PES University RR Campus</div>
        </div>
      </nav>

      <main className="mt-4">
        <div className="content container">
          <div className="row">
            {links.map((item) => {
              return (
                <div key={item.id} className="col-md-4 col-12 my-3">
                  <div className="cards-wrap">
                    <Link href={item.url} rel="noreferrer" target="_blank">
                      <div className="cards p-3">
                        <div className="cards-content">
                          <Image
                            src={item.img}
                            className="img-fluid cards-img"
                            alt=""
                          />
                          <h3 className="my-2 cards-name">{item.name}</h3>
                          <p className="text-muted cards-about">{item.about}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
