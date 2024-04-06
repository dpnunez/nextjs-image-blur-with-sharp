import Image from 'next/image'
import image1 from '../../../../public/images/photo-1.jpeg'
import image2 from '../../../../public/images/photo-2.jpeg'
import image3 from '../../../../public/images/photo-3.jpeg'

export default function Page() {
  return (
    <>
      <Image
        className="image-grid"
        src={image1}
        placeholder="blur"
        alt="Image 1"
      />
      <Image
        className="image-grid"
        src={image2}
        placeholder="blur"
        alt="Image 2"
      />
      <Image
        className="image-grid"
        src={image3}
        placeholder="blur"
        alt="Image 3"
      />
    </>
  )
}
