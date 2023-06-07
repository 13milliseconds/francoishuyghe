import '@/styles/globals.css'
import { SettingsProvider } from '@/context/context'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AnimatePresence, motion } from 'framer-motion'
import {useRouter} from 'next/router'


export default function App({ Component, pageProps }) {
  const router = useRouter()

  return <SettingsProvider>
    <Header />
    <AnimatePresence 
      mode="popLayout" 
      initial={false} 
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
    key={router.pathname}
    initial={{ x: '100%', opacity: 1 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -500, opacity: 0 }}
    transition={{
        type: "spring",
        damping: 30,
        stiffness: 200
    }}
  >
      <Component {...pageProps}/>
      </motion.div>
    </AnimatePresence>
    <Footer />
  </SettingsProvider>
}
