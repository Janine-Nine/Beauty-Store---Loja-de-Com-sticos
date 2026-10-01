<?php
session_start();
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/conexao.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => false, 'mensagem' => 'Método não permitido.']);
    exit;
}

$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$senha = (string) ($_POST['senha'] ?? '');

if (!$email || $senha === '') {
    http_response_code(422);
    echo json_encode(['status' => false, 'mensagem' => 'Informe e-mail e senha.']);
    exit;
}

$stmt = $conn->prepare('SELECT id, nome, email, senha, is_admin FROM usuarios WHERE email = ? LIMIT 1');
$stmt->execute([$email]);
$usuario = $stmt->fetch();

$senhaOk = $usuario && (password_verify($senha, $usuario['senha']) || md5($senha) === $usuario['senha']);

if (!$senhaOk) {
    http_response_code(401);
    echo json_encode(['status' => false, 'mensagem' => 'Dados inválidos.']);
    exit;
}

$_SESSION['user'] = [
    'id' => $usuario['id'],
    'nome' => $usuario['nome'],
    'email' => $usuario['email'],
    'is_admin' => (int) $usuario['is_admin'],
];

echo json_encode(['status' => true, 'mensagem' => 'Login realizado com sucesso.'], JSON_UNESCAPED_UNICODE);
