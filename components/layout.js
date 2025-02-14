import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 p-4 md:p-8">
      <nav className="mb-8">
        <ul className="flex gap-6 text-sm">
          <li><Link href="/" className="hover:text-zinc-400">about</Link></li>
          <li><Link href="/thoughts" className="hover:text-zinc-400">thoughts</Link></li>
          <li><Link href="/contact" className="hover:text-zinc-400">contact</Link></li>
        </ul>
      </nav>
      <div className="max-w-2xl mx-auto">
        {children}
      </div>
    </div>
  )
}
