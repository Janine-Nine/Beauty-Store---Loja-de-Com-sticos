<?php
session_start();
require_once __DIR__ . '/conexao.php';

if (!isset($_SESSION['user']) || (int) $_SESSION['user']['is_admin'] !== 1) {
    header('Location: ../../public/login.html');
    exit;
}

$produtos = $conn->query('SELECT id, nome, categoria, preco, estoque FROM produtos ORDER BY id DESC')->fetchAll();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Painel Admin | Beauty Store</title>
  <link rel="stylesheet" href="../../public/assets/css/style.css">
</head>
<body>
  <main class="container section">
    <div class="section-head">
      <div>
        <p class="eyebrow">Admin</p>
        <h1>Painel de produtos</h1>
      </div>
      <a class="btn btn-primary" href="novo_produto.php">Adicionar produto</a>
    </div>
    <div class="card summary">
      <table style="width:100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="text-align:left; padding:10px;">ID</th>
            <th style="text-align:left; padding:10px;">Nome</th>
            <th style="text-align:left; padding:10px;">Categoria</th>
            <th style="text-align:left; padding:10px;">Preço</th>
            <th style="text-align:left; padding:10px;">Estoque</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($produtos as $produto): ?>
            <tr>
              <td style="padding:10px; border-top:1px solid #ead9e3;"><?php echo (int) $produto['id']; ?></td>
              <td style="padding:10px; border-top:1px solid #ead9e3;"><?php echo htmlspecialchars($produto['nome']); ?></td>
              <td style="padding:10px; border-top:1px solid #ead9e3;"><?php echo htmlspecialchars($produto['categoria']); ?></td>
              <td style="padding:10px; border-top:1px solid #ead9e3;">R$ <?php echo number_format((float) $produto['preco'], 2, ',', '.'); ?></td>
              <td style="padding:10px; border-top:1px solid #ead9e3;"><?php echo (int) $produto['estoque']; ?></td>
            </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    </div>
  </main>
</body>
</html>
