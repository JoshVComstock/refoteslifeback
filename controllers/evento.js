const express =require( "express");
const { PrismaClient } =require( "@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get("/evento", async (req, res) => {
  try {
    const evento = await prisma.evento.findMany({});
    res.json({
      message: "evento obtenido correstamente",
      data: evento,
    });
  } catch (error) {
    res.json({
      message: error.message,
      data: error,
    });
  }
});

app.post("/evento", async (req, res) => {
  const evento = await prisma.evento.create({
    data: req.body,
  });
  res.json({
    message: "evento creada correctamente",
    data: evento,
  });
});
app.put("/evento/:id", async (req, res) => {
  const evento = await prisma.evento.update({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json({
    message: "evento actualizada correctamente",
    data: evento,
  });
});
app.delete("/evento/:id", async (req, res) => {
  const evento = await prisma.evento.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json({
    message: "evento eliminada correstamente",
  });
});
app.get("/evento/:id", async (req, res) => {
  const evento = await prisma.evento.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json({
    message: "evento obtenida correctamente",
    data: evento,
  });
});

module.exports=app;