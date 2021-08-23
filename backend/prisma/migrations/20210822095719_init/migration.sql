-- CreateTable
CREATE TABLE "Log" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "useBathroom" BOOLEAN NOT NULL DEFAULT false,
    "lowCalorie" BOOLEAN NOT NULL DEFAULT false,
    "didFast" BOOLEAN NOT NULL DEFAULT false,
    "noJunk" BOOLEAN NOT NULL DEFAULT false,
    "takeVitamins" BOOLEAN NOT NULL DEFAULT false,
    "sleep8" BOOLEAN NOT NULL DEFAULT false,
    "didMeditate" BOOLEAN NOT NULL DEFAULT false,
    "caloriesOut" INTEGER NOT NULL DEFAULT 0,
    "totalDistance" REAL NOT NULL DEFAULT 0,
    "runDistance" REAL NOT NULL DEFAULT 0,
    "weights" INTEGER NOT NULL DEFAULT 0,
    "cardio" INTEGER NOT NULL DEFAULT 0,
    "yoga" INTEGER NOT NULL DEFAULT 0,
    "weight" REAL,
    "comment" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
