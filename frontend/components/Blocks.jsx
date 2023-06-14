import {PortableText} from '@portabletext/react'
import ImageBlock from './ImageBlock'

const myPortableTextComponents = {
    types: {
        image: ({value}) => <ImageBlock value={value} size="(max-width: 767px) 100vw, 70vh" />,
        callToAction: ({value, isInline}) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
    },
  
    marks: {
      link: ({children, value}) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <a href={value.href} rel={rel} target="_blank">
            {children}
          </a>
        )
      },
    },
  }

export default function Blocks({value}){
    
    return <PortableText 
                value={value}
                components={myPortableTextComponents}
            />
}