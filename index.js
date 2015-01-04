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

  if (baseClass) {
    constructor.prototype.constructor.prototype = baseClass.prototype;
    constructor.prototype.constructor = constructor;
    constructor.__super__ = baseClass;
  } else{
    constructor.__super__ = Object;
  }
  return constructor;
}
module.exports = Class;