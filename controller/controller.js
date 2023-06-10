exports.signup_get = (req, res) => {
    res.render('signup')
}
exports.login_get = (req, res) => {
    res.render('login')
}
exports.signup_post = (req, res) => {
    const { email, password } = req.body
    
    console.log(email, password)
    res.send('new signup')
}
exports.login_post = (req, res) => {
    const { email, password } = req.body
    
    console.log(email, password)
    res.send('user login')
}