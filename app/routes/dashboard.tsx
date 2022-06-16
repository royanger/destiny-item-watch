import type { LoaderFunction } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { authenticator } from '~/services/auth.server';
import type { User } from '~/services/auth.server';

export let loader: LoaderFunction = async ({ request, params }) => {
   const user = await authenticator.isAuthenticated(request, {
      failureRedirect: '/login',
   });
   return user;
};

export default function Dashboard() {
   let user: User = useLoaderData();

   return (
      <>
         <h1>Dashboard</h1>
         <p>You are logged in.</p>
         <p>{user ? user.displayName : null}</p>
         <Form method='post' action='/auth/logout'>
            <button>Logout</button>
         </Form>
      </>
   );
}
