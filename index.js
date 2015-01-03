function Class(attrs, baseClass){
  if (attrs['initialize']){
    return attrs['initialize'];
  } else {
    return function(){};
  }
}

module.exports = Class;