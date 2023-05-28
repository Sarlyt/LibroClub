module.exports = (sequelize, type)=>{
    return sequelize.define('usuarios',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nombre:type.STRING,
        password:type.STRING,
        correo: {type : type.STRING,  required : true, allowNull: false },
        pais: type.STRING,
        about:type.TEXT('medium'),
    });
}
