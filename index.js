function Class(attrs, baseClass){
  if (attrs['initialize']){
    var constructor = attrs['initialize'];
  } else {
    var constructor = function(){};
  }
  var propertyNames = Object.keys(attrs);
  propertyNames.forEach(function(property){
    if(property != 'initialize'){
      constructor.prototype[property] = attrs[property];
    }
  })
  return constructor;
}

module.exports = Class;