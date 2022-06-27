import * as React from 'react';
import { NavItem } from './NavItem';
import { LogoutButton } from './LogoutButton';

export function NavBar() {
   const links = [
      { name: 'Items Watched', link: '/dashboard/watching' },
      { name: 'Add Items', link: '/dashboard/additems' },
   ];

   return (
      <nav className="flex flew-row items-center ml-4 w-full">
         <ul className="flex flex-row grow">
            {links.map((item, index) => {
               return (
                  <React.Fragment key={index}>
                     <NavItem name={item.name} link={item.link} />
                  </React.Fragment>
               );
            })}
         </ul>
         <LogoutButton />
      </nav>
   );
}
