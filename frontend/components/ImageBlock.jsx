import { client } from '@/context/context'
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image'



export default function ImageBlock({value, classes, sizes}) {
  const imageProps = useNextSanityImage(client, value)

    return <div className={`image-block ${classes}`}>
      <div className='overflow-hidden rounded-lg'>
      <Image 
        {...imageProps}
        alt=""
        style={{ width: '100%', height: 'auto' }}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={value.asset.metadata.lqip}
      />
      </div>
    </div>
}