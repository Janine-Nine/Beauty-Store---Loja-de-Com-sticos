<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/conexao.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => false, 'mensagem' => 'Método não permitido.']);
    exit;
}

$produto = limpar($_POST['produto'] ?? '');
$preco = (float) ($_POST['preco'] ?? 0);
$quantidade = max(1, (int) ($_POST['quantidade'] ?? 1));

if ($produto === '' || $preco <= 0) {
    http_response_code(422);
    echo json_encode(['status' => false, 'mensagem' => 'Produto inválido.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$stmt = $conn->prepare('INSERT INTO carrinho (produto, preco, quantidade) VALUES (?, ?, ?)');
$stmt->execute([$produto, $preco, $quantidade]);

echo json_encode(['status' => true, 'mensagem' => 'Produto adicionado.'], JSON_UNESCAPED_UNICODE);
