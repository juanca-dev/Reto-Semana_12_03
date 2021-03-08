interface iNumero{
  codigo:number

  mostrarInfo():void

}
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
 

class Numero{
  constructor(
    private  _constante:Number,

  ){
    this._constante = _constante;

  }
  get getconstante():Number{
    return this._constante;
   }

   set setconstante(value:Number){
     this._constante = value;
   }
}