import Portfolio from '@/components/Portfolio';
import { getAllProjects } from '@/lib/database';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home({projects}) {

  return (
    <main className={`${inter.className} min-h-screen`}>
      <Portfolio projects={projects} />
    </main>
  )
}


export async function getStaticProps() {
  const projects = await getAllProjects()

  return {
    props: {
      projects
    }
  };
}