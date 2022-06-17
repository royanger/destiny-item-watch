import type { MetaFunction } from '@remix-run/node'
import {
   Links,
   LiveReload,
   Meta,
   Outlet,
   Scripts,
   ScrollRestoration,
} from '@remix-run/react'
import styles from './styles/styles.css'
import tailwind from './styles/tailwind.css'

export const meta: MetaFunction = () => ({
   charset: 'utf-8',
   title: 'Destiny Item Watch',
   viewport: 'width=device-width,initial-scale=1',
})

export function links() {
   return [
      { rel: 'stylesheet', href: styles },
      { rel: 'stylesheet', href: tailwind },
      { rel: 'icon', href: '/images/favicon/favicon.ico', type: 'image/ico' },
   ]
}

export default function App() {
   return (
      <html lang="en">
         <head>
            <Meta />
            <Links />
         </head>
         <body>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
         </body>
      </html>
   )
}
