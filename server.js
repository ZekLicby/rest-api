const http = require("http"); // Importa o método http, que é essencial para criação de apis restful
const app = require("./app");
const port = process.env.PORT || 3000; // Criação da porta de serviço
const server = http.createServer(app); // Criação do servidor http com o app
server.listen(port);
