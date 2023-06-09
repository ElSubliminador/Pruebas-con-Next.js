import { connect, connection } from "mongoose";

let isConnected = false

/**
 * * Create a mongo database connection
 */
export const dbConnect = async () => {
    if (isConnected) return;

    const dbconnection = await connect(process.env.MONGODB_URL);
    isConnected = dbconnection.connections[0].readyState;

    console.log(dbconnection.connection.db.databaseName)
}

export const dbClose =  () => {
    connection.close()
        .then(() => console.log("Conexión a MongoDB cerrada :("))
        .catch(err => console.log("Error al cerrar la db:", err))
}

connection.on("connected", () => {
    console.log("MongoDB conectado")
})

connection.on("error", err => {
    console.log(err)
})


connection.on("close", () => {
    console.log("MongoDB desconectado")
})