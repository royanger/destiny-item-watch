import type { LoaderFunction } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { authenticator } from '~/services/auth.server'
import type { User } from '~/services/auth.server'
import Header from '~/lib/components/Header/Header'

export let loader: LoaderFunction = async ({ request, params }) => {
   const user = await authenticator.isAuthenticated(request, {
      failureRedirect: '/login',
   })
   return user
}

export default function Dashboard() {
   let user: User = useLoaderData()

   console.log(user)
   return (
      <>
         <Header />
      </>
   )
}
