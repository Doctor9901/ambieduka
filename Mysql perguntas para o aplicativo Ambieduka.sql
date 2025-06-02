CREATE DATABASE Etapa1_Germinacao;
USE CicloPlanta;

CREATE TABLE Perguntas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    etapa VARCHAR(50),              
    pergunta TEXT NOT NULL,         
    alternativa_a TEXT NOT NULL,
    alternativa_b TEXT NOT NULL,
    alternativa_c TEXT NOT NULL,
    alternativa_d TEXT NOT NULL,
    alternativa_e TEXT NOT NULL,
    resposta_correta CHAR(1) NOT NULL  
);
-- etapa 01 Germinação

INSERT INTO Perguntas (etapa, pergunta, alternativa_a, alternativa_b, alternativa_c, alternativa_d, alternativa_e, resposta_correta)
VALUES
('Germinação', 'Questão 01: O que é germinação?', 
 'Quando a planta está totalmente crescida',
 'Quando a planta é colhida',
 'Quando as flores aparecem',
 'Quando a planta dá frutos',
 'Quando a semente começa a crescer',
 'E'),

('Germinação', 'Questão 02: O que a semente precisa para germinar?', 
 'Água, calor e ar',
 'Açúcar, sal e vinagre',
 'Sol direto o tempo todo',
 'Gelo e sombra',
 'Barulho e vento',
 'A'),

('Germinação', 'Questão 03: Qual parte sai primeiro da semente na germinação?', 
 'As flores',
 'As folhas',
 'Os frutos',
 'O caule',
 'A raiz',
 'E'),

('Germinação', 'Questão 04: Por que a semente incha na germinação?', 
 'Porque ela dorme demais',
 'Porque está cheia de vento',
 'Porque absorve água',
 'Porque é colocada no freezer',
 'Porque é esmagada',
 'C'),

('Germinação', 'Questão 05: Onde a semente começa a germinar melhor?', 
 'No asfalto quente',
 'Dentro do armário',
 'Em um solo úmido e escuro',
 'Em cima de uma pedra seca',
 'Embaixo de gelo',
 'C');
 
 -- 02 etapa Crescimento
 
 INSERT INTO Perguntas (etapa, pergunta, alternativa_a, alternativa_b, alternativa_c, alternativa_d, alternativa_e, resposta_correta)
VALUES
('Crescimento', 'Questão 01: O que acontece na fase de crescimento da planta?', 
 'A semente se quebra',
 'A planta morre',
 'As flores aparecem',
 'A planta começa a se desenvolver com caule e folhas',
 'A planta já dá frutos',
 'D'),

('Crescimento', 'Questão 02: Qual é a função da luz solar nessa fase?', 
 'Fazer sombra para a planta dormir',
 'Ajudar na fotossíntese para produzir alimento',
 'Secar as raízes da planta',
 'Evitar que a planta cresça demais',
 'Colorir as folhas',
 'B'),

('Crescimento', 'Questão 03: O que acontece com as raízes nessa etapa?', 
 'Elas somem',
 'Elas sobem até a superfície',
 'Elas ajudam a fixar a planta e absorver água',
 'Elas viram folhas',
 'Elas se transformam em sementes',
 'C'),

('Crescimento', 'Questão 04: O que aparece na planta durante essa fase?', 
 'Flores e frutos prontos',
 'Caule e folhas',
 'Somente sementes',
 'Raízes podres',
 'Nada muda',
 'B'),

('Crescimento', 'Questão 05: Como podemos ajudar a planta a crescer bem?', 
 'Colocando-a no escuro',
 'Regando com refrigerante',
 'Deixando sem terra',
 'Oferecendo luz, água e nutrientes',
 'Regando com óleo',
 'D');
 
 -- 3 etapa Flor e Reprodução
 
 INSERT INTO Perguntas (etapa, enunciado, alternativa_a, alternativa_b, alternativa_c, alternativa_d, alternativa_e, resposta_correta)
VALUES 
('Flor e Reprodução', 'Questão 01: Qual parte da flor se transforma em fruto após a reprodução?', 
 'As pétalas', 
 'Os estames', 
 'O pólen', 
 'As folhas', 
 'O ovário', 
 'E'),

('Flor e Reprodução', 'Questão 02: Qual o papel principal das flores nas plantas?', 
 'Produzir folhas', 
 'Atrair insetos para polinizar', 
 'Servir de alimento para outros animais', 
 'Ajudar a planta a respirar', 
 'Reproduzir', 
 'E'),

('Flor e Reprodução', 'Questão 03: O que é polinização?', 
 'A formação da raiz', 
 'A absorção de água', 
 'O crescimento do caule', 
 'A fotossíntese', 
 'A transferência de pólen para o pistilo', 
 'E'),

('Flor e Reprodução', 'Questão 04: Quem normalmente ajuda na polinização das flores?', 
 'As pedras', 
 'O vento e os animais', 
 'A raiz', 
 'A seiva', 
 'Os insetos e o vento', 
 'E'),

('Flor e Reprodução', 'Questão 05: Qual dessas é uma flor usada para reprodução e também é comestível?', 
 'Folha de bananeira', 
 'Caule do milho', 
 'Raiz da cenoura', 
 'Semente do feijão', 
 'Flor do brócolis', 
 'E');
 
 -- etapa 04 Floração
 
 
 INSERT INTO Perguntas (etapa, enunciado, alternativa_a, alternativa_b, alternativa_c, alternativa_d, alternativa_e, resposta_correta)
VALUES 
('Floração', 'Questão 01: O que aparece na fase de floração?', 
 'Raízes', 
 'Flores', 
 'Sementes', 
 'Folhas', 
 'Frutas', 
 'B'),

('Floração', 'Questão 02: Para que servem as flores?', 
 'Para atrair insetos e fazer a reprodução', 
 'Para colorir o jardim apenas', 
 'Para assustar os animais', 
 'Para virar folhas', 
 'Para dar sombra', 
 'A'),

('Floração', 'Questão 03: O que ajuda a planta a polinizar?', 
 'Barulho', 
 'Calor', 
 'Insetos como abelhas', 
 'Pedra', 
 'Luz artificial', 
 'C'),

('Floração', 'Questão 04: Qual é o sinal de que a planta está pronta para florir?', 
 'Tem muitas frutas', 
 'A raiz secou', 
 'Está grande e forte com folhas saudáveis', 
 'Está sem folhas', 
 'Está no inverno', 
 'C'),

('Floração', 'Questão 05: O que geralmente ocorre após a fase de floração?',
 'As folhas secam completamente',
 'Os frutos e sementes começam a se desenvolver',
 'A planta desaparece',
 'A planta se transforma em semente',
 'As raízes crescem para fora do solo',
 'B'),

 -- etapa 05
 
 ('Frutificação e maturação', 'Questão 01: O que é frutificação?', 
 'Quando a planta floresce', 
 'Quando a planta brota', 
 'Quando os frutos e sementes começam a se formar', 
 'Quando nasce a raiz', 
 'Quando a planta dorme', 
 'C'),

('Frutificação e maturação', 'Questão 02: Por que a planta produz frutos?', 
 'Para decorar o solo', 
 'Para proteger e espalhar as sementes', 
 'Para virar flor de novo', 
 'Para guardar folhas', 
 'Para crescer mais raiz', 
 'B'),

('Frutificação e maturação', 'Questão 03: O que tem dentro do fruto?', 
 'Água e folhas', 
 'Terra e raiz', 
 'Caule pequeno', 
 'Sementes', 
 'Flores novas', 
 'D'),

('Frutificação e maturação', 'Questão 04: Quando o fruto está maduro, ele está...', 
 'Verde e duro', 
 'Pronto para ser colhido e comer', 
 'Começando a brotar', 
 'Se tornando flor', 
 'Caindo no chão seco', 
 'B'),

('Frutificação e maturação', 'Questão 05: O que pode acontecer com a planta depois da frutificação?', 
 'Ela vira pedra', 
 'Ela volta a ser semente', 
 'Ela descansa, morre ou reinicia o ciclo', 
 'Ela congela', 
 'Ela se transforma em bicho', 
 'C');
<<<<<<< HEAD
=======
 
 
 
>>>>>>> 23517c6f35524f287262354011c0a535796ede9a
