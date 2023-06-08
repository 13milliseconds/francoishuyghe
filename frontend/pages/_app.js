import '@/styles/globals.css'
import { SettingsProvider } from '@/context/context'
import Header from '@/components/Header'
import About from '@/components/About'
import { AnimatePresence, motion } from 'framer-motion'
import {useRouter} from 'next/router'
import Copyright from '@/components/Copyright'


export default function App({ Component, pageProps }) {
  const router = useRouter()

  const scrollToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return <SettingsProvider>
    <Header />
    <AnimatePresence 
      mode="popLayout" 
      initial={false} 
      onExitComplete={scrollToTop}
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
    <About />
    <Copyright />
  </SettingsProvider>
}
