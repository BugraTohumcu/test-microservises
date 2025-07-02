-- CreateTable
CREATE TABLE "users" (
    "u_id" SERIAL NOT NULL,
    "name" VARCHAR(20),
    "age" INTEGER NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("u_id")
);
