import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { authenticator } from '~/services/auth.server';

export let loader: LoaderFunction = () => redirect('/login');

export let action: ActionFunction = ({ request, params }) => {
   return authenticator.authenticate('bungie', request, {
      successRedirect: '/dashboard',
      failureRedirect: '/login',
   });
};
