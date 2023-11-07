import Link from 'next/link'

export const Header = () => {
  console.log('Hola mundo header')
  return (<header>
    <nav>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/store">
          <li>Store</li>
        </Link>
      </ul>
    </nav>
  </header>)
}