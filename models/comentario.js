module.exports = (sequelize, type)=>{
    return sequelize.define('alumnos',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        idUsuario:type.INTEGER,
        idClub:type.INTEGER,
        comentario:type.TEXT('medium'),
        puntuacion:type.DOUBLE,
    });
}