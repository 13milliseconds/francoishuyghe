import '@/styles/globals.css'
import { SettingsProvider } from '@/context/context'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return <SettingsProvider>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </SettingsProvider>
}
