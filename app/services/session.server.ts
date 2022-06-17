import { createCookieSessionStorage } from '@remix-run/node'

export let sessionStorage = createCookieSessionStorage({
   cookie: {
      name: 'destinyitemwatch',
      sameSite: 'lax',
      domain: process.env.URL,
      path: '/',
      httpOnly: true,
      secrets: ['process.env.SECRET'],
      secure: process.env.NODE_ENV === 'production',
   },
})

export let { getSession, commitSession, destroySession } = sessionStorage
