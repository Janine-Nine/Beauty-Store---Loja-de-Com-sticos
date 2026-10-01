<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/conexao.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => false, 'mensagem' => 'Método não permitido.']);
    exit;
}

$entrada = json_decode(file_get_contents('php://input'), true);
$dados = is_array($entrada) ? $entrada : $_POST;

$nome = limpar($dados['nome'] ?? '');
$cpf = limpar($dados['cpf'] ?? '');
$email = filter_var($dados['email'] ?? '', FILTER_VALIDATE_EMAIL) ?: '';
$telefone = limpar($dados['telefone'] ?? '');
$endereco = limpar($dados['endereco'] ?? '');
$cidade = limpar($dados['cidade'] ?? '');
$estado = limpar($dados['estado'] ?? '');
$pagamento = limpar($dados['pagamento'] ?? '');
$total = (float) ($dados['total'] ?? 0);
$itens = isset($dados['itens']) ? json_encode($dados['itens'], JSON_UNESCAPED_UNICODE) : null;

if ($nome === '' || $email === '' || $endereco === '' || $total <= 0) {
    http_response_code(422);
    echo json_encode(['status' => false, 'mensagem' => 'Preencha os dados obrigatórios.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$stmt = $conn->prepare(
    'INSERT INTO pedidos (nome, cpf, email, telefone, endereco, cidade, estado, pagamento, total, itens)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
);

$stmt->execute([$nome, $cpf, $email, $telefone, $endereco, $cidade, $estado, $pagamento, $total, $itens]);

echo json_encode(['status' => true, 'mensagem' => 'Pedido realizado com sucesso.'], JSON_UNESCAPED_UNICODE);
