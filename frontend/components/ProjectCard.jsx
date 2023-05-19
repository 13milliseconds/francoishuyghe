import Link from "next/link";
import { urlFor } from "@/context/context";


export default function ProjectCard({project}) {

  return (
    <section className='project-card p-6 md:flex items-end mb-8 even:flex-row-reverse'>
      <div className="image bg-white p-6 mb-6">
        { project.featuredImage && <img src={urlFor(project.featuredImage).url()} />}
      </div>
      <div className="text md:px-6">
        <div className="bg-black text-white uppercase inline-block p-2 rounded mb-4">
          {project.year}
        </div>
        <Link href={`/project/${project.slug.current}`}>
          <h3 className="">{project.title}</h3>
        </Link>
          <p>{project.blurb}</p>
      </div>
    </section>
  )
}