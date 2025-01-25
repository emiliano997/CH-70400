import passport from "passport";

export function passportCall(strategy) {
  return (req, res, next) => {
    passport.authenticate(strategy, { session: false }, (error, user, info) => {
      if (error) return next(error);

      console.log(info);

      if (!user) {
        return res.status(401).json({
          error: "Unauthorized",
          details: info.messages ? info.messages : JSON.stringify(info),
        });
      }

      req.user = user;
      next();
    })(req, res, next);
  };
}
