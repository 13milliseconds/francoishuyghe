import { client } from '@/context/context'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default function Image({value, width}) {
    return <img src={urlFor(value).width(width).url()} />


}