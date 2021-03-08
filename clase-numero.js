// // Clase llamada numero
// class Numero{
//   private  _constante:Number;
//   constructor(constante:Number){
//     this._constante;
//   }
//      get getconstante():Number{
//        return this._constante;
//       }
//       set setconstante(value):{
//         this._constante = value;
//       }
// }
var Numero = /** @class */ (function () {
    function Numero(_constante) {
        this._constante = _constante;
        this._constante = _constante;
    }
    Object.defineProperty(Numero.prototype, "getconstante", {
        get: function () {
            return this._constante;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Numero.prototype, "setconstante", {
        set: function (value) {
            this._constante = value;
        },
        enumerable: false,
        configurable: true
    });
    return Numero;
}());
