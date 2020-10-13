export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar upload de arquivos com NodeJS e Multer',
          labels: ['#EC4A2C'],
          user: 'https://avatars1.githubusercontent.com/u/67491541?v=4'
        },
        {
          id: 2,
          content: 'Criar uma pequena aplicação web com Elixir e Phoenix',
          labels: ['#EC4A2C'],
          user: 'https://avatars1.githubusercontent.com/u/67491541?v=4'
        },
        {
          id: 3,
          content: 'Praticar React Naive: "Learn Reanimated 2: Higher-order Animations"',
          labels: ['#54e1f7'],
          user: 'https://avatars1.githubusercontent.com/u/67491541?v=4'
        },
        {
          id: 4,
          content: 'Ler capítulo 3 do livro "Project Management in New Product Development"',
          labels: ['#54e1f7'],
          user: 'https://avatars1.githubusercontent.com/u/67491541?v=4'
        },
        {
          id: 5,
          content: 'Finalizar a aula 2 da Next Level Week #3 – Rocketseat',
          labels: ['#A536CF'],
          user: 'https://avatars1.githubusercontent.com/u/67491541?v=4'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://avatars1.githubusercontent.com/u/67491541?v=4'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Recriando clone da interface Nubank com React Native',
          labels: ['#A536CF'],
          user: 'https://avatars1.githubusercontent.com/u/67491541?v=4'
        },
        {
          id: 8,
          content: 'Ler artigo de metodologias ágeis para gerenciamento de projetos',
          labels: ['#EC4A2C','#54e1f7'],
          user: 'https://avatars1.githubusercontent.com/u/67491541?v=4'
        },
        {
          id: 9,
          content: 'Estudar React Native',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Escrever a metodologia cientifica para o artigo de natural language processing',
          labels: [],
        },
        {
          id: 12,
          content: 'Estudar testes e deploy ReactJS',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Assistir ao vivo José Valim sobre o Elixir no canal do Rodrigo Branas',
          labels: ['#EC4A2C'],
        }
      ]
    },
  ];
}