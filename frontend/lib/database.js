import { client } from "@/context/context";

export async function getAllProjects() {
    const projects = await client.fetch(`*[_type == "project"]{
      ...,
      featuredImage{
        asset->{
          ...,
          metadata
        }
      }
    } | order(year desc)`);

    return projects
}

export async function getSingleProject(slug) {
    const project = await client.fetch(`*[slug.current=="${slug}"]{
      ...,
      featuredImage{
        asset->{
          ...,
          metadata
        }
      }
    }`);
  
    return {
      slug,
      ...project[0],
    };
}

export async function getSettings() {
  const settings = await client.fetch(`*[_type == "siteSettings"]{
    ...,
    avatar{
        asset->{
          ...,
          metadata
        }
      }
  }`);

  return settings[0]
}