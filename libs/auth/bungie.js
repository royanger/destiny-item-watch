'use strict'

Object.defineProperty(exports, '__esModule', {
   value: true,
})
exports.default = Bungie2

function Bungie2(options) {
   return {
      id: 'bungie',
      name: 'Bungie',
      type: 'oauth',
      authorization: {
         url: 'https://www.bungie.net/en/OAuth/Authorize?reauth=true',
         params: {
            scope: '',
         },
      },
      // checks: ['state'],
      token: 'https://www.bungie.net/platform/app/oauth/token/',
      userinfo:
         'https://www.bungie.net/platform/User/GetBungieAccount/{membershipId}/254/',

      profile(profile) {
         console.log('testing', profile)
         const { bungieNetUser: user } = profile.Response
         return {
            id: user.membershipId,
            name: user.displayName,
            email: null,
            image: `https://www.bungie.net${
               user.profilePicturePath.startsWith('/') ? '' : '/'
            }${user.profilePicturePath}`,
         }
      },

      options,
   }
}
