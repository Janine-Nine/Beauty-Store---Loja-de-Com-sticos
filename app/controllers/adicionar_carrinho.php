<?php
session_start();
require_once __DIR__ . '/conexao.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../../public/produtos.html');
    exit;
}

$id = (int) ($_POST['id'] ?? 0);
$qtd = max(1, (int) ($_POST['qtd'] ?? 1));

$stmt = $conn->prepare('SELECT id, estoque FROM produtos WHERE id = ? LIMIT 1');
$stmt->execute([$id]);
$produto = $stmt->fetch();

if ($produto) {
    $quantidade = min($qtd, max(1, (int) $produto['estoque']));
    $_SESSION['cart'] ??= [];
    $_SESSION['cart'][$id] = ($_SESSION['cart'][$id] ?? 0) + $quantidade;
}

header('Location: carrinho.php');
exit;
