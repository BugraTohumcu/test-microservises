-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20),
    "price" INTEGER,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
