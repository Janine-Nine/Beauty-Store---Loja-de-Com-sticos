# Beauty Store - Loja Virtual de Cosméticos

Aplicação de loja virtual de cosméticos com interface em português e inglês. O projeto reúne páginas HTML, CSS e JavaScript, além de componentes PHP e scripts MySQL para desenvolvimento.

## Recursos

- Catálogo de produtos com categorias e detalhes.
- Carrinho com inclusão, remoção e ajuste de quantidades.
- Fluxo de checkout.
- Telas de login e cadastro.
- Painel e páginas PHP para operações administrativas e de produtos.
- Interface em português e inglês.
- Configuração Docker Compose para PHP, MySQL e phpMyAdmin.

> As páginas estáticas podem ser visualizadas sem configurar o backend. Recursos que dependem de PHP ou do banco de dados precisam do ambiente correspondente.

## Tecnologias

- HTML, CSS e JavaScript
- PHP 8.2 com Apache, na configuração Docker
- MySQL 8
- Docker Compose

## Estrutura do projeto

```text
.
├── app/                    # Páginas e controladores PHP
├── config/
│   ├── database.php        # Configuração de conexão com o banco
│   └── database/init.sql   # Criação e dados iniciais do banco
├── Docker/
│   └── docker-compose.yml  # Serviços PHP, MySQL e phpMyAdmin
├── MySQL/
│   └── beautystore.sql     # Script SQL adicional
├── public/
│   ├── *.html              # Páginas da loja
│   ├── assets/css/         # Estilos
│   ├── assets/js/          # Scripts do navegador
│   └── img/                # Imagens
└── README.md
```

## Executar a interface estática

Abra `public/index.html` no navegador ou use a extensão Live Server no Visual Studio Code. Essa opção serve para visualizar a interface; ela não inicia o backend PHP nem conecta ao MySQL.

## Executar com Docker

Requisitos: Docker e Docker Compose instalados e em execução.

Na raiz do projeto, inicie os serviços:

```bash
docker compose -f Docker/docker-compose.yml up -d
```

Acesse:

- Loja: <http://localhost:8080/public/>
- phpMyAdmin: <http://localhost:8081/>
- MySQL: `localhost:3306`

Para encerrar os serviços sem remover os dados persistidos:

```bash
docker compose -f Docker/docker-compose.yml down
```

O script `config/database/init.sql` é montado como inicialização do MySQL. O MySQL executa esses scripts ao criar o volume de dados pela primeira vez; alterações posteriores no SQL não são aplicadas automaticamente a um volume já existente.

### Observação sobre PHP e MySQL

A configuração atual usa a imagem `php:8.2-apache` sem instalar explicitamente a extensão PHP `pdo_mysql`. Portanto, páginas PHP que acessam o banco podem não funcionar até que essa extensão seja adicionada à imagem. A interface estática pode ser testada separadamente pelo procedimento acima.

## Configuração do banco

O arquivo `config/database.php` lê as variáveis de ambiente abaixo e usa valores locais alternativos quando elas não estão definidas:

- `DB_HOST`
- `DB_NAME`
- `DB_USERNAME`
- `DB_PASSWORD`

No Docker Compose, essas variáveis apontam para o serviço MySQL definido no arquivo de configuração.

## Segurança

As credenciais presentes no Docker Compose são valores de desenvolvimento. Não as reutilize em produção. Antes de publicar a aplicação, configure segredos fora do código, revise autenticação e permissões, valide entradas, proteja sessões e formulários, habilite HTTPS e integre um provedor de pagamento real se necessário.

## 📄 Licença

Copyright © 2026 Janine Tavares Cunha.

O projeto está disponível para aquisição. Os termos relacionados à licença, transferência do código-fonte, direitos de personalização e uso comercial deverão ser acordados entre a vendedora e o comprador.

## ⭐ Interessado(a) no Projeto?

Para informações sobre aquisição, personalização ou outros detalhes, entre em contato com a proprietária do projeto.