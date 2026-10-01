<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/conexao.php';

$stmt = $conn->query('SELECT id, nome, categoria, descricao, preco, imagem, estoque FROM produtos ORDER BY id');
echo json_encode($stmt->fetchAll(), JSON_UNESCAPED_UNICODE);
