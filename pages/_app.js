import '../styles/globals.css'
import { Poppins } from '@next/font/google'
import { ContextProvider } from '../contexts/ContextProvider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <ContextProvider> 
        <Component {...pageProps}/>
      </ContextProvider>
    </main>
  )
}

export default MyApp
