const ConectarBD=require("./conectarBD");

class ProductoBD extends ConectarBD{
    constructor(){
        super();
    }

    async nuevoProducto(producto){
        const sql="INSERT INTO productos values (null,'"+producto.nombre+"','"+producto.descripcion+"','"+producto.precio+"');";
        try {
        await this.conectarMysql();
        await this.conexion.execute(sql);
        console.log("Crea un nuevo producto");
        await this.cerrarConexion();
        } catch (error) {
            console.log("Error al agreagar el producto "+error);
        }
    }

    async mostrarProductos() {
        const sql="SELECT * FROM productos;";
        try {
            await this.conectarMysql();
            const [productosMySql]=await this.conexion.query(sql);
            await this.cerrarConexion();
            console.log("Los datos se obtuvieron correctamente");
            return(productosMySql);
        } catch (error) {
            console.log("Error al obtener los datos");
            console.error(sql);
            
        }
    }

  async productoId(id){
    const sql="SELECT * FROM productos WHERE idproducto = "+id+";";
    try {
        await this.conectarMysql();
        const [[producto]]= await this.conexion.execute(sql);
        await this.cerrarConexion();
        console.log("Consulta correcta por id");
        return producto;
    } catch (error) {
        console.error("Error al consultar por id "+ error);
        console.error(sql);
    }

  }
  async editarProducto(producto){
    /*const sql="UPDATE usuarios SET nombre='"+usuario.nombre+"',celular='"+usuario.celular+"',correo='"+usuario.correo+"';"*/
    const sql2=`UPDATE productos SET 
    nombre='${producto.nombre}',
    descripcion='${producto.descripcion}',
    precio='${producto.precio}'
    WHERE idproducto=${producto.idproducto};`;
    try {
        await this.conectarMysql();
        await this.conexion.execute(sql2)
        await this.cerrarConexion();
        console.log("Actualizacion correcta del producto ");
    } catch (error) {
        console.error("Error al editar el producto "+ error);
        console.error(sql2);
        
    }
  }

  async borrarProducto(idproducto){
    const sql="DELETE FROM productos WHERE idproducto="+idproducto;
    try {
        await this.conectarMysql();
        await this.conexion.execute(sql);
        await this.cerrarConexion();
        console.log("Producto borrado");

    } catch (error) {
        console.error("Error al borrar el producto");
        console.log(sql);
    }
  }

}

module.exports=ProductoBD;