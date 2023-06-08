import Image from "next/image";
import cntl from 'cntl';


export default function Avatar({onClick, showAbout}){

        const avatarCN = cntl`
            fixed
            top-0
            right-4
            md:right-4
            w-24
            md:w-36
            cursor-pointer
            z-20
            ${showAbout && 'invert'}
        `;
    return <div id="avatar" className={avatarCN} onClick={onClick}>
        <Image 
            className="normal"
            src="/images/avatar-normal.webp" 
            alt="A drawing of my face" 
            width="150" height="150" 
            />
    </div>
}