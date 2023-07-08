import '@/styles/globals.css'
import mixpanel from 'mixpanel-browser'
import { SettingsProvider } from '@/context/context'
import Header from '@/components/Header'
import About from '@/components/About'
import { AnimatePresence, motion } from 'framer-motion'
import {useRouter} from 'next/router'
import Copyright from '@/components/Copyright'
import Background from '@/components/Background'

mixpanel.init('5ef841fbcb5da6cd638311395889856b', { debug: true, track_pageview: true, persistence: 'localStorage' });

export default function App({ Component, pageProps }) {
  const router = useRouter()

  const scrollToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return <SettingsProvider>
    <Header/>
    <AnimatePresence 
      mode="wait" 
      initial={false} 
      onExitComplete={scrollToTop}
    >
      <motion.div
        key={router.pathname}
        initial={{ x: 300, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{
            type: "spring",
            damping: 30,
            stiffness: 200
        }}
      >
      <Component {...pageProps}/>
      </motion.div>
    </AnimatePresence>
    <Background />
    <About />
    <Copyright />
  </SettingsProvider>
}
