import Link from "next/link";
import Image from "./Image";


export default function ProjectCard({project}) {

  return (
    <section className='project-card md:flex items-end mb-10 even:flex-row-reverse md:saturate-0 hover:saturate-100 transition-[filter] duration-1000'>
      <div className="image md:mb-6 mb-2">
      <Link href={`/project/${project.slug.current}`}>
        { project.featuredImage &&
          <Image value={project.featuredImage}/>}
        </Link>
      </div>
      <div className="text md:px-6">
        <p className="mb-2">{project.year}</p>
        <Link href={`/project/${project.slug.current}`}>
          <h3 className="text-5xl mb-2">{project.title}</h3>
        </Link>
          <p>{project.blurb}</p>
      </div>
    </section>
  )
}