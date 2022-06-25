import { Link } from 'react-router-dom';

export function NavItem({ name, link }: NavItem) {
   return (
      <li>
         <Link className=" mx-4" to={link}>
            {name}
         </Link>
      </li>
   );
}
