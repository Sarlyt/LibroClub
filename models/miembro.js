module.exports = (sequelize, type)=>{
    return sequelize.define('miembros',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        idUsuario:type.INTEGER,
        idClub:type.INTEGER,
    });
}