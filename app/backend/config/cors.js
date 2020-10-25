module.exports = (req, res, next) => {

    console.log(req.method)
    console.log(req.path)
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Authorization, Content-Length, X-Requested-With")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")

    next()

    // if ( req.method === "OPTIONS")
    //     res.send('200')
    // else 
    //     next()
}