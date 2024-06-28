class Producto {
    constructor(producto1){
        this.id=producto1.idproducto;
        this.nombre=producto1.nombre;
        this.descripcion=producto1.descripcion;
        this.precio=producto1.precio;
    }

    set id(id){
        this._id=id;
    }
    set nombre(nombre){
        var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if(regexNombre.test(nombre)){
        this._nombre=nombre;
       }
       
    }
    
    set descripcion(descripcion){
        var regexDescripcion = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if(regexDescripcion.test(descripcion)){
            this._descripcion=descripcion;
        }
        
    }

    set precio(precio){
        var regexPrecio = /^\d{1,8}(\.\d{1,2})?$/;
        if(regexPrecio.test(precio)){
            this._precio=precio;

        }
        
    } 

    get id(){
        return this._id;
    }

    get nombre(){
        return this._nombre;
    }

    get descripcion(){
        return this._descripcion;
    }

    get precio(){
        return this._precio;
    }
    get mostrarDatos(){
       return{
        nombre:this.nombre,
        descripcion:this.descripcion,
        precio:this.precio
       }
    }
}    

module.exports=Producto;