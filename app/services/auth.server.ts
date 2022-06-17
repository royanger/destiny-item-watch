import { Authenticator } from 'remix-auth'
import { sessionStorage } from '~/services/session.server'
import { BungieStrategy } from 'remix-auth-bungie'
import type { BungieProfile } from 'remix-auth-bungie'

export type User = BungieProfile

export let authenticator = new Authenticator<User>(sessionStorage)

if (
   !process.env.BUNGIE_ID ||
   !process.env.BUNGIE_SECRET ||
   !process.env.BUNGIE_APIKEY
) {
   throw new Error('Bungie ID, Secret and API Key are required')
}

authenticator.use(
   new BungieStrategy(
      {
         clientID: process.env.BUNGIE_ID,
         clientSecret: process.env.BUNGIE_SECRET,
         callbackURL: `https://${process.env.URL}/auth/callback/bungie`,
         apiKey: process.env.BUNGIE_APIKEY,
      },
      async ({ profile }) => {
         return profile
      }
   )
)
