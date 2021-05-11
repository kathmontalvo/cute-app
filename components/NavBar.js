import Link from 'next/link'

const NavBar = () => {
    return ( 
        <header>
            <div className="logo">
                <h1>US</h1>
            </div>
            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About us</a></Link>
                <Link href="/dates"><a>Dates</a></Link>
                
            </nav>
        </header>
     );
}
 
export default NavBar;