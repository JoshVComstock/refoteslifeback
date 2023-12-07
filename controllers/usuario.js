const express =require( "express");
const { PrismaClient } =require( "@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get("/usuario", async (req, res) => {
  try {
    const usuario = await prisma.usuario.findMany({});
    res.json({
      message: "usuario obtenido correstamente",
      data: usuario,
    });
  } catch (error) {
    res.json({
      message: error.message,
      data: error,
    });
  }
});

app.post("/usuario", async (req, res) => {
  const usuario = await prisma.usuario.create({
    data: req.body,
  });
  res.json({
    message: "usuario creada correctamente",
    data: usuario,
  });
});
app.put("/usuario/:id", async (req, res) => {
  const usuario = await prisma.usuario.update({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json({
    message: "usuario actualizada correctamente",
    data: usuario,
  });
});
app.delete("/usuario/:id", async (req, res) => {
  const usuario = await prisma.usuario.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json({
    message: "usuario eliminada correstamente",
  });
});
app.get("/usuario/:id", async (req, res) => {
  const usuario = await prisma.usuario.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json({
    message: "usuario obtenida correctamente",
    data: usuario,
  });
});
app.post("/login", async (req, res) => {
  const { usuario, password } = req.body;
  const login = await prisma.usuario.findFirst({
    where: {
      usuario: usuario,
      password: password
    },
  });
  if (!login) {
    res.json({
      message: "Usuario no registrado",
      error: "Usuario no registrado",
    });
    return;
  }
  login.password = undefined;
  res.json({
    message: "Inicio de sesion correcto",
    data: login,
  });
});

module.exports=app;