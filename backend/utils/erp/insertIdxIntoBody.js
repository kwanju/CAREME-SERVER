
module.exports = function(_req,_res,_next){
    _req.body.shelter_idx = _req.session.user.idx;
    _next();
}