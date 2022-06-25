export const passportSerialize = passport => {
   passport.serializeUser((user, callback) => {
      console.log('SERIALIZE', user);
      // if (user.provider === 'github') {
      //    callback(null, user.id);
      // }
      if (user.provider === 'bungie') {
         callback(null, user.membershipId);
      }
   });
};
