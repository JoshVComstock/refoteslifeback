const express =require( "express");
const cors =require( "cors");
const categoria =require( "./controllers/categoria");
const usuario =require( "./controllers/usuario");
const evento =require( "./controllers/evento");
const app = express();
const port = 3000;
const bodyParser =require( "body-parser");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(categoria);
app.use(usuario);
app.use(evento);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
