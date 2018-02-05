const dbSettings = {
    db: process.env.DB || 'people',
    user: process.env.DB_USER || 'vinicius',
    pass: process.env.DB_PASS || 'vinicius123',
    repl: process.env.DB_REPLS || 'rs1',
    servers: (process.env.DB_SERVERS) ? process.env.DB_SERVERS(' ') :
    [
        '192.168.99.100:27017',
        '192.168.99.101:27017',
        '192.168.99.102:27017'
    ],
    dbParameters:() =>({
        w: 'majorirty',
        wtimeout: 10000,
        j:true,
        readPreference: "ReadPreference.SECONDARY_PREFERRED",
        native_parse:false
    }),
    serverParameters: ()=>({
        autoReconnect: true,
        poolSize:10,
        socketoptions:{
            connectTimeoutMS:30000,
            socketTimeoutMS:30000
        }
    })

}

const serverSettings = {
    port: process.env.PORT || 3000,
    ssl:require('./ssl')
}

module.exports = Object.assign({},dbSettings,serverSettings)