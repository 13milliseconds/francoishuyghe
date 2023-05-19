import ProjectCard from "./ProjectCard";

export default function Portfolio({projects}) {

  return (
    <div className='portfolio'>
      {projects.map((project) => <ProjectCard key={project._id} project={project} />
      )}
    </div>
  )
}