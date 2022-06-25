/**
 * @desc    Confirm user is logged in
 * @route   GET /auth/authcheck
 * @access  PUBLIC
 */
export const authCheck = (req, res) => {
   if (req.user) {
      res.status(200).json({
         user: {
            isAuthenticated: true,
            displayName: req.user.displayName,
            // userId: req.user.id,
            // email: req.user.email,
            // givenName: req.user.givenName,
            // familyName: req.user.familyName,
            // displayName: req.user.displayName,
         },
      });
   } else {
      res.status(200).json({
         user: {
            isAuthenticated: false,
         },
      });
   }
};

/**
 * @desc    Log user out by destroying req.user object
 * @route   POST /auth/logout
 * @access  PUBLIC
 */
export const authLogout = (req, res) => {
   req.logout(function (err) {
      if (err) return next(err);
      res.redirect(process.env.APP_URL);
   });
};
