import { StaticImageData } from "next/image";

import photo1 from './photos/1.jpg'
import photo2 from './photos/2.jpg'
import photo3 from './photos/3.jpg'
import photo4 from './photos/4.jpg'
import photo5 from './photos/5.jpg'

export type WonderImage = {
    id: string,
    name: string,
    src: StaticImageData,
    photographer: string,
    location: string,
}


const wondersImage: WonderImage[] = [
    {
        id: '1',
        name: 'fooboo 1',
        src: photo1,
        photographer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, iure.',
        location: 'chennai'
    },
    {
        id: '2',
        name: 'fooboo 2',
        src: photo2,
        photographer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, iure.',
        location: 'chennai'
    },
    {
        id: '3',
        name: 'fooboo 3',
        src: photo3,
        photographer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, iure.',
        location: 'chennai'
    },
    {
        id: '4',
        name: 'fooboo 4',
        src: photo4,
        photographer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, iure.',
        location: 'chennai'
    },
    {
        id: '5',
        name: 'fooboo 5',
        src: photo5,
        photographer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, iure.',
        location: 'chennai'
    }

];


export default wondersImage;