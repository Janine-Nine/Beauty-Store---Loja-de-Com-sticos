<?php
session_start();
require_once __DIR__ . '/conexao.php';

if (!isset($_SESSION['user']) || (int) $_SESSION['user']['is_admin'] !== 1) {
    header('Location: ../../public/login.html');
    exit;
}

$erro = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = limpar($_POST['nome'] ?? '');
    $categoria = limpar($_POST['categoria'] ?? '');
    $descricao = limpar($_POST['descricao'] ?? '');
    $preco = (float) ($_POST['preco'] ?? 0);
    $estoque = (int) ($_POST['estoque'] ?? 0);
    $imagem = limpar($_POST['imagem'] ?? '');

    if ($nome === '' || $categoria === '' || $preco <= 0 || $imagem === '') {
        $erro = 'Preencha nome, categoria, preço e caminho da imagem.';
    } else {
        $stmt = $conn->prepare('INSERT INTO produtos (nome, categoria, descricao, preco, estoque, imagem) VALUES (?, ?, ?, ?, ?, ?)');
        $stmt->execute([$nome, $categoria, $descricao, $preco, $estoque, $imagem]);
        header('Location: painel.php');
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Novo Produto | Beauty Store</title>
  <link rel="stylesheet" href="../../public/assets/css/style.css">
</head>
<body>
  <main class="container login-wrap">
    <form class="card login-card" method="post">
      <p class="eyebrow">Admin</p>
      <h1 style="font-size: 2.5rem;">Novo produto</h1>
      <?php if ($erro): ?>
        <p class="product-desc" style="color:#9d255f;"><?php echo htmlspecialchars($erro); ?></p>
      <?php endif; ?>
      <div class="field" style="margin-top: 14px;"><label>Nome<input name="nome" required></label></div>
      <div class="field" style="margin-top: 14px;"><label>Categoria<input name="categoria" placeholder="Bases, Batons, Olhos..." required></label></div>
      <div class="field" style="margin-top: 14px;"><label>Descrição<textarea name="descricao"></textarea></label></div>
      <div class="field" style="margin-top: 14px;"><label>Preço<input name="preco" type="number" step="0.01" required></label></div>
      <div class="field" style="margin-top: 14px;"><label>Estoque<input name="estoque" type="number" min="0" value="0"></label></div>
      <div class="field" style="margin-top: 14px;"><label>Imagem<input name="imagem" placeholder="img/Base Líquida HD.jpg" required></label></div>
      <button class="btn btn-primary" type="submit" style="width:100%; margin-top: 18px;">Salvar produto</button>
      <p class="product-desc" style="margin-top: 18px;"><a href="painel.php">Voltar ao painel</a></p>
    </form>
  </main>
</body>
</html>
