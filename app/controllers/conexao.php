<?php
$config = require __DIR__ . '/../../config/database.php';

$dsn = sprintf(
    'mysql:host=%s;dbname=%s;charset=%s',
    $config['host'],
    $config['dbname'],
    $config['charset']
);

try {
    $conn = new PDO($dsn, $config['username'], $config['password'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $exception) {
    http_response_code(500);
    echo json_encode([
        'status' => false,
        'mensagem' => 'Erro ao conectar ao banco de dados.',
    ]);
    exit;
}

function limpar($valor)
{
    return trim(filter_var((string) $valor, FILTER_SANITIZE_SPECIAL_CHARS));
}
