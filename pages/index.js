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
        <meta name="title" content="GDSC PESU RR - Join Us!" />
        <meta name="author" content="GDSC PESU RR" />
        <meta
          name="description"
          content="Join GDSC PESU RR and explore the world of technology. We're a community passionate about learning, sharing, and innovating."
        />
        <meta
          name="keywords"
          content="GDSC, PESU RR, technology, community, learning, innovation, programming"
        />
        <link
          rel="canonical"
          href="https://gdsc-pes-links.vercel.app/GDSC_card.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gdsc-pes-links.vercel.app/" />
        <meta property="og:title" content="GDSC PESU RR - Join Us!" />
        <meta
          property="og:description"
          content="Join GDSC PESU RR and explore the world of technology. We're a community passionate about learning, sharing, and innovating."
        />
        <meta
          property="og:image"
          content="https://gdsc-pes-links.vercel.app/GDSC_card.webp"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://gdsc-pes-links.vercel.app/"
        />
        <meta property="twitter:title" content="GDSC PESU RR - Join Us!" />
        <meta
          property="twitter:description"
          content="Join GDSC PESU RR and explore the world of technology. We're a community passionate about learning, sharing, and innovating."
        />
        <meta
          property="twitter:image"
          content="https://gdsc-pes-links.vercel.app/GDSC_card.webp"
        />

        <meta
          name="recruitment"
          content="GDSC PESU RR is recruiting tech enthusiasts! If you're passionate about technology and want to be a part of a vibrant community, join us on this exciting journey. Visit our website for more information."
        />
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
          <div className="row justify-content-center align-items-center">
            <div className="flex w-full h-fit m-3">

            <div className="col-md-8 col-12">
              <h2 className="text-center mb-4">
                {/* Heading for Recruitments */}
                Google Cloud Arcade Facilitator Program 24 is starting soon
              </h2>
              <p className="text-center">
                Follow us on social media and join the WhatsApp community group
                as <br></br> we&rsquo;ll be communicating the updates there.
              </p>
              <div className="text-center">
                {/* Button for the recruitment form */}
                <a
                  href="https://chat.whatsapp.com/FvD81k51RO7Co3Okbm9q0Y"
                  className="btn btn-success"
                >
                  Join Whatsapp Group
                </a>
              </div>
            </div>
          </div>

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
