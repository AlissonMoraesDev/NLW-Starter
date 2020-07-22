// importar a dependência do sqlite3
const sqlite3 = require('sqlite3').verbose()

// criar um objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db')
module.exports = db
// utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {
    // criar uma tabela com comandos SQL
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)
    // Inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?, ?, ?, ?, ?, ?, ?);
// `

//     const values = [
//         "https://images.unsplash.com/photo-1567093321629-c23611f44d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         "Papersider",
//         "Serafim Bomfim, Santos Dumont",
//         "Número 733",
//         "Sergipe",
//         "Aracaju",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log('Cadastrado com sucesso!')
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)
    
//     // Consultar os dados na tabela
//     db.all(`SELECT * FROM places`, function(err, rows) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log('Registros encontrados: ')
//         console.log(rows)
//     })

    // Deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [2], function(err) {
    //     if (err) {
    //         return console.log(err)
    //     } 

    //     console.log('Registro deletado com sucesso!')
    // })
})