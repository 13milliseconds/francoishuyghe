import Link from "next/link";
import Image from "./ImageBlock";
import { motion } from "framer-motion";


export default function ProjectCard({project}) {

  return (
    <section className='project-card md:flex items-end mb-20 even:flex-row-reverse  hover:saturate-100 transition-[filter] duration-1000'>
      <div className="image md:mb-6 mb-2">
      <Link href={`/project/${project.slug.current}`} name={project.title} scroll={false}>
        { project.featuredImage &&
          <Image value={project.featuredImage}/>}
        </Link>
      </div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'tween',
          duration: .5
        }}
        className="text md:px-6"
        >
        <p className="mb-2">{project.year}</p>
        <Link href={`/project/${project.slug.current}`} scroll={false}>
          <h3 className="text-5xl mb-2">{project.title}</h3>
        </Link>
          <p>{project.blurb}</p>
      </motion.div>
    </section>
  )
}