var verbose = 0;



exports.dir = function (_tag, _object) {
  if (verbose == 1) {
    console.log("--TAG : "+_tag)
    console.dir(_object);
  }

}

exports.log = function(_tag,_target){
  if(verbose ==1){
    console.log("--TAG : "+_tag);
    console.log(_target);
  }
}

