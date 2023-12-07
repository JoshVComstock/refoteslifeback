const express =require( "express");
const { PrismaClient } =require( "@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get("/categoria", async (req, res) => {
  try {
    const categoria = await prisma.categoria.findMany({});
    res.json({
      message: "Categoria obtenido correstamente",
      data: categoria,
    });
  } catch (error) {
    res.json({
      message: error.message,
      data: error,
    });
  }
});

app.post("/categoria", async (req, res) => {
  const categoria = await prisma.categoria.create({
    data: req.body,
  });
  res.json({
    message: "Categoria creada correctamente",
    data: categoria,
  });
});
app.put("/categoria/:id", async (req, res) => {
  const categoria = await prisma.categoria.update({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json({
    message: "Categoria actualizada correctamente",
    data: categoria,
  });
});
app.delete("/categoria/:id", async (req, res) => {
  const categoria = await prisma.categoria.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json({
    message: "Categoria eliminada correstamente",
  });
});
app.get("/categoria/:id", async (req, res) => {
  const categoria = await prisma.categoria.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json({
    message: "Categoria obtenida correctamente",
    data: categoria,
  });
});

module.exports=app;