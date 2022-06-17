import { Authenticator } from 'remix-auth'
import { sessionStorage } from '~/services/session.server'
import { BungieStrategy } from 'remix-auth-bungie'
import { createOrUpdateUser } from '~/queries/auth'

export type User = {
   id: number
   createdAt: Date
   updatedAt: Date
   membershipId: string
   email: string
   displayName: string
}

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
         const userProfile = await createOrUpdateUser(
            profile.bungieNetUser.membershipId,
            profile.bungieNetUser.displayName
         )
         return userProfile
      }
   )
)
