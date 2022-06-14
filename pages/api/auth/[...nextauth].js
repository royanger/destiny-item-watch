import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
// import BungieProvider from 'next-auth/providers/bungie'
import BungieProvider from '../../../libs/auth/bungie'

export default NextAuth({
   // Configure one or more authentication providers
   debug: true,
   providers: [
      GithubProvider({
         clientId: process.env.GITHUB_ID,
         clientSecret: process.env.GITHUB_SECRET,
      }),
      BungieProvider({
         clientId: process.env.BUNGIE_ID,
         clientSecret: process.env.BUNGIE_SECRET,
         headers: {
            'X-API-Key': process.env.BUNGIE_APIKEY,
         },
      }),
   ],
   secret: process.env.NEXTAUTH_SECRET,
   // callbacks: {
   //    async signIn({ user, account, profile, email, credentials }) {
   //       return true
   //    },
   //    async redirect({ url, baseUrl }) {
   //       return baseUrl
   //    },
   //    async session({ session, user, token }) {
   //       return session
   //    },
   //    async jwt({ token, user, account, profile, isNewUser }) {
   //       return token
   //    },
   async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
         token.accessToken = account.access_token
      }
      return token
   },
   async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
   },
   // },
})
