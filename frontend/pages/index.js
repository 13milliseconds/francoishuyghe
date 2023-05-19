import Portfolio from '@/components/Portfolio';
import { getAllProjects } from '@/lib/database';

export default function Home({projects}) {

  return (
    <main>
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