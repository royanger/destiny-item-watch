import Logo from './Logo'
import NavBar from './NavBar'

export default function Header() {
   return (
      <header className="flex flex-row text-xl text-white ">
         <Logo />
         <NavBar />
      </header>
   )
}
