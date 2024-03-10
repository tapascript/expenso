import Link from "next/link"

const Header = () => {
  return (
    <div className="bg-slate-900 text-white p-4 mb-1">
      <Link href="/">
        <h1 className="text-3xl">Expenso</h1>
      </Link>
    </div>
  )
}

export default Header