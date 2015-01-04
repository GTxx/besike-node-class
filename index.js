var current_class;
function Class(attrs, baseClass){
  var constructor = {};
  if (attrs['initialize']){
    constructor = attrs['initialize'];
  } else {
    constructor = function(){};
  }

  if (baseClass) {
    //constructor.prototype.constructor.prototype = baseClass.prototype;
    constructor.prototype = new baseClass();
    constructor.prototype.constructor = constructor;
    constructor.__super__ = baseClass;
  } else{
    constructor.__super__ = Object;
  }


  var propertyNames = Object.keys(attrs);
  propertyNames.forEach(function(property){
    if(property != 'initialize'){
      constructor.prototype[property] = function(){
        current_class = constructor;
        return attrs[property].apply(this, arguments);
      }
    }
  })
  //console.log(constructor.prototype.foo);

  constructor.prototype.super = function(){
    var superName = arguments[0];
    // set current class to super
    current_class = current_class.__super__;
    var res = current_class.prototype[superName].apply(this, [].slice.call(arguments, 1))
    current_class = constructor;
    return res
    //var superName = arguments[0];
    //console.log(superName);
    //console.log(constructor.__super__[superName]);
    //
    //return constructor.__super__.prototype[superName].apply(this, [].slice.call(arguments, 1))
  }


  console.log(constructor.prototype.foo);
  return constructor;
}
module.exports = Class;