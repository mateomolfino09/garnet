import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { useStateContext } from '../contexts/ContextProvider';
import Sidebar from '../components/Sidebar';
import HeroBanner from '../components/HeroBanner';
import AboutUs from '../components/AboutUs';
import ImageLayer from '../components/ImageLayer';
import Markets from '../components/Markets';
import Form from '../components/Form';
import Footer from '../components/Footer';


export default function Home() {
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <div>
      <Head>
        <title>Garnet - International Trading Corp.</title>
        <meta name="description" content="Garnet International has become a trusted partner with strong ties to the slaughtering and agriculture sectors." />
        <link rel="icon" href="/isotipoOficial.ico" />
      </Head>
      <div className="flex relative justify-end">
        {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white  z-10">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
        )}
        <div
              className={
                `dark:bg-main-dark-bg ${activeMenu ? 'md:mr-72' : 'flex-2'}`
              }
            >
                <Navbar />
                <HeroBanner />
                <AboutUs />
                <ImageLayer />
                <Markets />
                <Form />
                <Footer />
              
          </div>

      </div>

    </div>
  )
}
