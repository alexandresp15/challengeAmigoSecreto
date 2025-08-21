# 🎁 Desafio Amigo Secreto - Alura ONE G9

Este projeto foi desenvolvido como parte do **Challenge do curso de Lógica de Programação - Oracle Next Education (ONE) - Turma G9** da [Alura](https://www.alura.com.br).  

👉 **Acesse o projeto online aqui:**  
<a href="https://alexandresp15.github.io/challengeAmigoSecreto/" target="_blank">🔗 https://alexandresp15.github.io/challengeAmigoSecreto/</a>

O objetivo é criar uma aplicação simples em **JavaScript, HTML e CSS** que permita:  
- Adicionar nomes a uma lista de amigos;  
- Validar entradas (não aceitar vazios, duplicados ou caracteres inválidos);  
- Exibir os amigos adicionados dinamicamente na tela;  
- Sortear aleatoriamente um amigo da lista e exibir o resultado.  

---

## 🚀 Funcionalidades

✔️ Adicionar nomes à lista digitando e pressionando **Enter** ou clicando no botão **Adicionar**  
✔️ Validação para evitar campos vazios, caracteres inválidos ou nomes duplicados  
✔️ Exibição dinâmica da lista de amigos em `<ul>`  
✔️ Sorteio de um amigo aleatório utilizando `Math.random()` e `Math.floor()`  
✔️ Exibição do resultado do sorteio no navegador  

---

## 🛠️ Tecnologias Utilizadas
- **HTML5** → Estrutura da página  
- **CSS3** → Estilização da interface  
- **JavaScript (ES6)** → Lógica de funcionamento  

---

## 📜 Regras de Negócio Implementadas

1. **Adicionar amigo**  
   - Não permite campo vazio.  
   - Aceita apenas letras e espaços (regex com suporte a acentos).  
   - Não permite duplicados (case-insensitive).  

2. **Atualizar lista**  
   - A lista HTML é limpa a cada atualização com `innerHTML = ""`.  
   - É percorrida com um loop **`while`**, adicionando cada amigo em `<li>`.  

3. **Sortear amigo**  
   - Só é permitido se houver pelo menos **2 nomes** na lista.  
   - Usa `Math.random()` e `Math.floor()` para selecionar um índice aleatório.  
   - Exibe o resultado no elemento com `id="resultado"`.  

---

## 🎮 Como Usar
1. Digite o nome de um amigo no campo de texto.  
2. Pressione **Enter** ou clique em **Adicionar** para incluir na lista.  
3. Repita o processo para adicionar quantos amigos quiser.  
4. Clique em **Sortear amigo** para escolher aleatoriamente um nome da lista.  

---

## 🏆 Status do Projeto
✅ **Concluído** – Desafio cumprido com sucesso no curso da **Alura ONE G9**.  

---

## ✨ Autor
Desenvolvido por **Alexandre Pereira** durante o programa **Oracle Next Education (ONE) - Grupo 9** em parceria com a **Alura**.  

