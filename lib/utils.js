exports.lookup = function(obj, field) {
  //这个是在form中找username 和 密码
  if (!obj) { return null; }
  // [username]=''  [password]=''??
  //
  var chain = field.split(']').join('').split('[');
  for (var i = 0, len = chain.length; i < len; i++) {
    var prop = obj[chain[i]];
    if (typeof(prop) === 'undefined') { return null; }
    if (typeof(prop) !== 'object') { return prop; }
    obj = prop;
  }
  return null;
};
