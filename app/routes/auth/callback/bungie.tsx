import type { LoaderFunction } from '@remix-run/node';
import { authenticator } from '~/services/auth.server';

export let loader: LoaderFunction = ({ request, params }) => {
   return authenticator.authenticate('bungie', request, {
      successRedirect: '/dashboard',
      failureRedirect: '/login',
   });
};
