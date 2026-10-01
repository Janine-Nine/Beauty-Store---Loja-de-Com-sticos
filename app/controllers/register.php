<?php
session_start();
require_once __DIR__ . '/conexao.php';

$erro = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = limpar($_POST['nome'] ?? '');
    $email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
    $senha = (string) ($_POST['senha'] ?? '');

    if ($nome === '') {
        $erro = 'Informe seu nome.';
    } elseif (!$email) {
        $erro = 'E-mail inválido.';
    } elseif (strlen($senha) < 6) {
        $erro = 'Senha precisa ter ao menos 6 caracteres.';
    } else {
        $hash = password_hash($senha, PASSWORD_DEFAULT);
        $stmt = $conn->prepare('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)');

        try {
            $stmt->execute([$nome, $email, $hash]);
            $_SESSION['user'] = [
                'id' => $conn->lastInsertId(),
                'nome' => $nome,
                'email' => $email,
                'is_admin' => 0,
            ];
            header('Location: ../../public/index.html');
            exit;
        } catch (PDOException $exception) {
            $erro = 'Erro ao cadastrar. Verifique se o e-mail já está em uso.';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Criar conta | Beauty Store</title>
  <link rel="stylesheet" href="../../public/assets/css/style.css">
</head>
<body>
  <main class="container login-wrap">
    <form class="card login-card" method="post">
      <p class="eyebrow">Cadastro</p>
      <h1 style="font-size: 2.5rem;">Criar conta</h1>
      <?php if ($erro): ?>
        <p class="product-desc" style="color:#9d255f;"><?php echo htmlspecialchars($erro); ?></p>
      <?php endif; ?>
      <div class="field" style="margin-top: 18px;">
        <label for="nome">Nome</label>
        <input id="nome" name="nome" type="text" required>
      </div>
      <div class="field" style="margin-top: 14px;">
        <label for="email">E-mail</label>
        <input id="email" name="email" type="email" required>
      </div>
      <div class="field" style="margin-top: 14px;">
        <label for="senha">Senha</label>
        <input id="senha" name="senha" type="password" required>
      </div>
      <button class="btn btn-primary" type="submit" style="width: 100%; margin-top: 18px;">Cadastrar</button>
      <p class="product-desc" style="margin-top: 18px;"><a href="../../public/login.html">Voltar ao login</a></p>
    </form>
  </main>
</body>
</html>
