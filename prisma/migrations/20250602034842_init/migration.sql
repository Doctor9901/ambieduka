-- CreateTable
CREATE TABLE `Perguntas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `etapa` VARCHAR(191) NOT NULL,
    `pergunta` VARCHAR(191) NOT NULL,
    `alternativa_a` VARCHAR(191) NOT NULL,
    `alternativa_b` VARCHAR(191) NOT NULL,
    `alternativa_c` VARCHAR(191) NOT NULL,
    `alternativa_d` VARCHAR(191) NOT NULL,
    `alternativa_e` VARCHAR(191) NOT NULL,
    `resposta_correta` CHAR(1) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
