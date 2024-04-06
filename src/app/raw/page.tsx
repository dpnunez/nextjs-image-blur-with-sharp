import Image from 'next/image'

const images = [
  'https://images.unsplash.com/photo-1705615791178-d32cc2cdcd9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMjM2NzUwNA&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1498751041763-40284fe1eb66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMjM2NzUxNg&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1709589865176-7c6ede164354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMjM2NzUyNg&ixlib=rb-4.0.3&q=80&w=1080',
]

export default async function Page() {
  return images.map((image) => (
    <Image
      key={image}
      className="image-grid"
      src={image}
      width={600}
      height={600}
      alt="Image"
    />
  ))
}
