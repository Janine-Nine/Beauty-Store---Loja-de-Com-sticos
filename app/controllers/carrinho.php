<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/conexao.php';

$dados = json_decode(file_get_contents('php://input'), true);

if (!is_array($dados) || count($dados) === 0) {
    http_response_code(422);
    echo json_encode(['status' => false, 'mensagem' => 'Carrinho vazio.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$stmt = $conn->prepare('INSERT INTO carrinho (produto_id, produto, preco, quantidade) VALUES (?, ?, ?, ?)');

foreach ($dados as $produto) {
    $stmt->execute([
        (int) ($produto['id'] ?? 0),
        limpar($produto['nome'] ?? ''),
        (float) ($produto['preco'] ?? 0),
        (int) ($produto['quantidade'] ?? 1),
    ]);
}

echo json_encode(['status' => true, 'mensagem' => 'Carrinho salvo com sucesso.'], JSON_UNESCAPED_UNICODE);
