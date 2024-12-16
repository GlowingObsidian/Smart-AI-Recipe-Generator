-- CreateTable
CREATE TABLE "Prompt" (
    "id" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "updatedPrompt" TEXT,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3),

    CONSTRAINT "Prompt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" TEXT NOT NULL,
    "recipeJSON" TEXT NOT NULL,
    "promptID" TEXT NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_promptID_fkey" FOREIGN KEY ("promptID") REFERENCES "Prompt"("id") ON DELETE CASCADE ON UPDATE CASCADE;
