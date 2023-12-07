/*
  Warnings:

  - You are about to drop the column `celular` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `correo` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `usuario` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "celular",
DROP COLUMN "correo",
ADD COLUMN     "usuario" TEXT NOT NULL;
