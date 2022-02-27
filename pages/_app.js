import '../styles/globals.css'
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/Header'))
function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
        <title>Türker#0001</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://pro.fontawesome.com/releases/v5.15.4/css/all.css" rel="stylesheet" />

    </Head>
    <main className="border-b-[7px] border-t-[7px] h-full border-neutral-800/50 w-full">
      <div className="max-w-screen-lg p-5 w-full md:w-10/12 lg:w-8/12 mx-auto transition-all duration-300">
        <Header />
        <Component {...pageProps} />
      </div>
      <div className="bg-neutral-800/5">
        <div className="max-w-screen-lg p-5 w-full md:w-10/12 lg:w-8/12 mx-auto transition-all duration-300">
          <div className="md:flex w-full items-center justify-between">
            <div>
              <a href="https://github.com/turkerpw/turker.vercel.app" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-all duration-200">Açık Kaynak ❤</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>);
}

export default MyApp
