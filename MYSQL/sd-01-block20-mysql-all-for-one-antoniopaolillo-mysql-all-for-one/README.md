# Bem vindo ao repositório do projeto All For One

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo e, se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

---

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone https://github.com/tryber/sd-01-block20-mysql-all-for-one`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-01-block20-mysql-all-for-one`

2. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b jhonatan-de-souza-mysql-all-for-one`

3. Para cada exercício você deve criar um novo arquivo sql seguindo a seguinte estrutura:
  * desafio1.sql, desafio2.sql...desafioN.sql

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer o arquivo que você alterou como desafio1.sql)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando solução para desafio 1)
        * `git status` (deve aparecer listado o arquivo _desafio1.sql_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto MySQL All For One'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin seunome-mysql-all-for-one`

7. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-01-block20-mysql-all-for-one/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-01-block20-mysql-all-for-one/pulls) e confira que o seu _Pull Request_ está criado

---

### DURANTE O DESENVOLVIMENTO

* ⚠ **LEMBRE-SE DE CRIAR TODOS OS ARQUIVOS DENTRO DA PASTA COM O SEU NOME** ⚠

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

# O que deverá ser desenvolvido

Hoje você fará um projeto com o codinome *All For One* em que praticará todos os conceitos de SQL já ensinados até aqui. Porém, você vai usar um banco de dados totalmente diferente, então dê tchau para o `sakila` e dê boas vindas ao `Northwind`, que será usado neste projeto. As instruções de como restaurar o banco podem ser lidas a seguir.

# Instruções para restaurar o banco de dados `Northwind`

1. Faça o download do arquivo de backup [aqui](northwind.sql) clicando com botão direito e selecionando "Salvar como" para salvar o arquivo em seu computador.
2. Abra o arquivo com algum editor de texto, e selecione todo o conteúdo do arquivo usando `CTRL-A`.
3. Abra o MySQL Workbench.
4. Abra uma nova janela de query e cole dentro dela todo o conteúdo do arquivo `northwind.sql`.
5. Selecione todo o código com o atalho `CTRL-A` e depois clique no icone de trovão para executar a query.

    ![Restaurando o banco Northwind](images/restore_northwind.png)
6. Aguarde alguns segundos (espere em torno de 30 segundos antes de tentar fazer algo).
7. Clique no botão apontado na imagem a seguir para atualizar a listagem de banco de dados.

    ![Tabelas do banco Northwind](images/refresh_databases.png)
7. Verifique se o banco restaurado possui todas as seguintes tabelas:

    ![Tabelas do banco Northwind](images/northwind.png)
8. Clique com botão direito em cada tabela e selecione "Select Rows" e certifique-se que todas as tabelas possuem registros. Caso tenha alguma faltando, faça o passo a seguir. Caso contrário, pode ir para próxima seção.
9. Caso existam tabelas faltando, drope o banco de dados, clicando com o botão direito em cima do banco de dados northwind e selecionando "Drop Schema", e refaça os passos novamente, dessa vez aguardando um tempo maior quando executar o script de restauração.

    ![Drop Schema](images/drop_database.png)

# Como desenvolver e entregar este projeto

Temos, a seguir, uma série de desafios com diferentes níveis de complexidade que devem ser resolvidos cada um em seu arquivo próprio.

1. Leia a pergunta e crie um arquivo chamado `desafioX.sql`, em que X é o número do desafio.
2. O arquivo deve conter apenas o código SQL do desafio resolvido. **Não se esqueça de incluir o ponto e vírgula (";")** no final de suas queries e também de **colocar o nome do banco_de_dados.tabela por completo**, como no exemplo a seguir.
```sql
SELECT * FROM northwind.orders;
```
4. Faça isso até finalizar todos os desafios e depois siga as instruções de como entregar o projeto em **Instruções para entregar seu projeto**.
---

## Desafios Iniciais

Monte queries para encontrar as seguintes informações:

1. Exiba apenas os nomes do produtos na tabela `products`.
2. Exiba todas as colunas da tabela `products`.
3. Escreva uma query que mostre a coluna que representa a primary key da tabela `products`.
4. Conte quantos registros existem em `product_name` de `products`.
5. Monte uma query que exiba os registros da tabela `products` de 4 a 13, não use `where` ou `order by`.
6. Mostre as colunas `product_name` e `ID` da tabela `products` de maneira que os resultados estejam em ordem alfabética dos nomes.
7. Mostre os 5 primeiros registros da coluna `id` da tabela `products`, quando esta está em ordem decrescente.
8. Crie uma tabela que tenha 3 colunas. Na primeira coluna, adicione somatória de 5+6 (esta somatória deve ser realizada pelo SQL). Na segunda coluna deve haver a palavra "de". E por fim, na terceira coluna a somatória de 2+8 (esta somatória deve ser realizada pelo SQL) deve ser exibida. A primeira coluna deve se chamar "A", a segunda coluna deve se chamar "Trybe" e a terceira coluna deve se chamar "eh".

---

## Desafios sobre filtragem de dados

9. Mostre todos os valores de `notes` da tabela `purchase_orders` que não são nulos.
10. Mostre todos os dados da tabela `purchase_orders` em ordem decrescente ordenados por `created_by` onde `created_by` é maior ou igual a 3.
11. Exiba os dados de `notes` da tabela `purchase_orders` e mostre apenas os dados de `notes` entre 30 a 39.
12. Mostre as datas (`submitted_date`) de `purchase_orders` onde `submitted_date` é do dia 14 do mês de janeiro do ano 2006.
13. Mostre o `supplier_id` das `purchase_orders` onde o `supplier_id` seja 1 ou 3.
14. Mostre os `supplier_id` da `purchase_orders` onde o `supplier_id` sejam 1 a 3.
15. Mostre somente as horas da `submitted_date` de todos registros de `purchase_orders`.
16. Exiba a `submitted_date` das `purchase_orders` que estão entre 2006-01-26 00:00:00 a 2006-03-27 23:59:59.
17. Mostre os dados do `supplier_id` das `purchase_orders` em que os `supplier_id` sejam tanto 1 ou 6.
18. Mostre quais dados de purchase_orders tem `suplier_id` igual a 3 e `status_id` igual a 2.
19. Quantos pedidos foram feitos na tabela `orders` pelo `employee_id` 6 ou 5, e que foram enviados através do método `shipper_id` 2?

---

## Desafios Manipulação de tabelas

20. Adicione ao `order_details` uma linha com os seguintes dados: `order_id`: 69, `product_id`: 80, `unit_price`: 15.0000, `discount`: 0, `status_id`: 2, `date_allocated`: NULL, `purchase_order_id`: NULL e `inventory_id`: 129 (o Id deve ser incrementado automaticamente).
21. Adicione duas linhas ao `order_details` com os mesmos dados. Esses dados são novamente `order_id`: 69, `product_id`: 80, `unit_price`: 15.0000, `discount`: 0, `status_id`: 2, `date_allocated`: NULL, `purchase_order_id`: NULL e `inventory_id`: 129 (o Id deve ser incrementado automaticamente).
22. Atualize os dados de `discount` do `order_details` para 15.
23. Atualize os dados de `discount` da tabela `order_details` para 30 cuja `unit_price` seja menor que 10.0000.
24. Atualize os dados de discount da tabela `order_details` para 45 cuja `unit_price` seja menor que 10.000 e o id seja um número entre 30 a 40.
25. Delete todos os dados em que a `unit_price` seja menor que 10.0000.
26. Delete todos os dados em que a `unit_price` seja maior que 10.0000.
27. Delete todos os dados da tabela `order_details`.

---

## Instruções para entregar seu projeto:

### DEPOIS DE TERMINAR O DESENVOLVIMENTO

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-01`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).
