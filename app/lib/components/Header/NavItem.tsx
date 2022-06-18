import { Link } from '@remix-run/react'

export default function NavItem({ name, link }: NavItem) {
   return (
      <li>
         <Link className=" mx-4" to={link}>
            {name}
         </Link>
      </li>
   )
}
