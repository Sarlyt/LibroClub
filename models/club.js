module.exports = (sequelize, type)=>{
    return sequelize.define('clubs',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        idUsuario:type.INTEGER,
        nombre:type.STRING,
        descripcion:type.TEXT('medium'),
        urlImagen:type.STRING,
        tituloLibro:type.INTEGER,
        autorLibro:type.STRING,
        promedio:type.DOUBLE,
        miembros:type.INTEGER,
    });
}