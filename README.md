# Teste Técnico Front-End - Econverse

Este repositório contém a solução do teste técnico da Econverse, desenvolvido com Next.js, React e TypeScript. O foco do projeto foi em boas práticas, testes automatizados e SEO.

## Tecnologias
- Next.js
- React
- TypeScript
- Jest + React Testing Library
- ESLint
- Husky
- Commitlint

## Requisitos
- Node.js v18.x ou superior
- npm

## Instalação
1. Clonar o repositório:
```bash
git clone https://github.com/Matheus7p/teste-front-end.git
```
2. Entrar no diretório do projeto:
```bash
cd teste-front-end
```
3. Instalar dependências:
```bash
npm install
```
4. Rodar em desenvolvimento:
```bash
npm run dev
```

## Testes
O projeto usa Jest e React Testing Library. A cobertura mínima exigida é 80%. Para rodar os testes localmente:
```bash
npm run test:ci
```

## Qualidade de código
Husky e Git hooks estão configurados para garantir padrão e qualidade:
- pre-commit: roda ESLint e testes antes do commit.
- pre-push: valida os testes antes do push.
- commitlint: valida mensagens segundo Conventional Commits.

## SEO
O projeto foi desenvolvido com um foco robusto em otimização para motores de busca (SEO) e na melhoria da aparência em mídias sociais, utilizando as práticas mais recentes do Next.js.

- Meta Tags com Next.js
- Dados Estruturados (JSON-LD)
- Open Graph (Social Sharing)

Pré-visualização de Compartilhamento (Open Graph)
Abaixo, um exemplo de como a aplicação é exibida ao ser compartilhada em uma mídia social, resultado da implementação das tags OG:

### WhatsApp
<img width="550" height="190" alt="image" src="https://github.com/user-attachments/assets/5c0eb6b9-7960-4206-a227-19411275ecfb" />

### Discord
<img width="562" height="237" alt="image" src="https://github.com/user-attachments/assets/69184ef4-4f0d-4641-a852-38c3fc0b2974" />

### X(twitter)
<img width="470" height="248" alt="image" src="https://github.com/user-attachments/assets/600ce696-989d-40f6-bc26-04a74980ca09" />

#### pagina do produto
<img width="470" height="248" alt="image" src="https://github.com/user-attachments/assets/28b3290a-2bd9-4e59-a763-e9c2e1d7624c" />
