import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="p-2 bg-white/5 ring-1 ring-white/20 rounded-xl my-10 flex gap-4">
      <Link
        className="p-4 hover:bg-white/20 transition-all duration-200 rounded-xl"
        href="/local/static"
      >
        Local (Static)
      </Link>
      <Link
        className="p-4 hover:bg-white/20 transition-all duration-200 rounded-xl"
        href="/local/dynamic"
      >
        Local (Dynamic)
      </Link>
      <Link
        className="p-4 hover:bg-white/20 transition-all duration-200 rounded-xl"
        href="/remote/static"
      >
        Remote
      </Link>
    </nav>
  )
}
