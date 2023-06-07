import { client } from '@/context/context'
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image'



export default function ImageBlock({value, classes}) {
  const imageProps = useNextSanityImage(client, value)

    return <div className={`image-block ${classes}`}>
      <Image 
        {...imageProps}
        alt=""
        style={{ width: '100%', height: 'auto' }}
        sizes="(max-width: 1500px) 100vw, 800px"
        placeholder="blur"
        blurDataURL={value.asset.metadata.lqip}
      />
    </div>
}