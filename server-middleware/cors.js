
export default function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    return next();
}