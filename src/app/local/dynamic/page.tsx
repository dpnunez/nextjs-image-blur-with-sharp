import { getPlaceholderImage } from '@/utils/images'
import Image from 'next/image'

const images = [
  '/images/photo-4.jpeg',
  '/images/photo-5.jpeg',
  '/images/photo-6.webp',
]

export default async function Page() {
  const imageWithPlaceholder = await Promise.all(
    images.map(async (src) => {
      const imageWithPlaceholder = await getPlaceholderImage(src)
      return imageWithPlaceholder
    }),
  )
  return imageWithPlaceholder.map((image) => (
    <Image
      className="image-grid"
      key={image.src}
      src={image.src}
      width={600}
      height={600}
      placeholder="blur"
      blurDataURL={image.placeholder}
      alt="Image"
    />
  ))
}
