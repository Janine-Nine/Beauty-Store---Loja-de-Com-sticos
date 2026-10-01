CREATE DATABASE IF NOT EXISTS beautystore
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE beautystore;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  is_admin TINYINT(1) DEFAULT 0,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  categoria VARCHAR(60) NOT NULL,
  descricao TEXT,
  preco DECIMAL(10,2) NOT NULL,
  imagem VARCHAR(255) NOT NULL,
  estoque INT DEFAULT 0,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS carrinho (
  id INT AUTO_INCREMENT PRIMARY KEY,
  produto_id INT NULL,
  produto VARCHAR(150) NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  quantidade INT NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  cpf VARCHAR(20),
  email VARCHAR(150) NOT NULL,
  telefone VARCHAR(30),
  endereco TEXT NOT NULL,
  cidade VARCHAR(80),
  estado VARCHAR(10),
  pagamento VARCHAR(50),
  total DECIMAL(10,2) NOT NULL,
  itens JSON NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nome, email, senha, is_admin) VALUES
('Admin', 'admin@beautystore.local', '$2y$10$YYva1g6lfdQh9mFvKa3O9eWTkkg0x5BvevOnId7aDlt8cmUS7eNc6', 1)
ON DUPLICATE KEY UPDATE nome = VALUES(nome);

INSERT INTO produtos (id, nome, categoria, descricao, preco, imagem, estoque) VALUES
(1, 'Base Líquida HD', 'Bases', 'Cobertura uniforme, acabamento natural e longa duração.', 89.90, 'img/Base Líquida HD.jpg', 25),
(2, 'Batom Vermelho Matte', 'Batons', 'Cor intensa, textura aveludada e alta fixação.', 49.90, 'img/Batom Vermelho Matte.jpg', 40),
(3, 'Máscara de Cílios Volume+', 'Olhos', 'Volume, curvatura e definição sem pesar nos fios.', 54.90, 'img/Máscara de Cílios.jpg', 30),
(4, 'Sombra Glitter Rose', 'Olhos', 'Brilho rosado sofisticado para produções especiais.', 39.90, 'img/Sombra Glitter Rose.jpg', 35),
(5, 'Kit Esmaltes Premium', 'Esmaltes', 'Cores vibrantes, acabamento brilhoso e secagem rápida.', 69.90, 'img/Esmaltes.jpg', 20),
(6, 'Perfume Floral Luxe', 'Perfumes', 'Fragrância floral elegante com toque fresco e marcante.', 149.90, 'img/Perfumes.jpg', 16)
ON DUPLICATE KEY UPDATE
  nome = VALUES(nome),
  categoria = VALUES(categoria),
  descricao = VALUES(descricao),
  preco = VALUES(preco),
  imagem = VALUES(imagem),
  estoque = VALUES(estoque);
