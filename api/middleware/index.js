const ensureAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    else {
        res.sendStatus(401)
    }
}

export { ensureAuth }