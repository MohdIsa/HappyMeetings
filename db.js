const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname+'/tests.db',
})
const Host = db.define('Host', {
  Name: {
    type: Sequelize.STRING(30),
  },
  Email: {
    type: Sequelize.STRING(30),
  },
  Number: {
    type: Sequelize.STRING(30)
  },
  Address:{
     type: Sequelize.STRING(200)
  }
})
const Visitor = db.define('Visitor', {
    
    Name: {
      type: Sequelize.STRING(30),
    },
    Email: {
      type: Sequelize.STRING(30),
    },
    Number: {
      type: Sequelize.STRING(30)
    },
    CheckIn:{
      type: Sequelize.STRING(30)
    }
    
  })
Visitor.belongsTo(Host);
Host.hasMany(Visitor);
db.sync({force:true},()=>
{
    console.log('working fine')
})
module.exports = {
  Host,
  Visitor,
  db
}