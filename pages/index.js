import Link from 'next/link'


export default function Home() {
  return (
    <div className="flex flex-col">
      <p className="text-center">Insert Landing Page Here</p> 
      <Link href="/trainer">
        <a>Trainer</a>
      </Link>
    </div>
  )
}
