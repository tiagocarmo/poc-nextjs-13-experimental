# poc-nextjs-13-experimental

## Diferenças NextJS 13 (experimental):

- jsconfig.json: Agora temos um alias para os arquivos na pasta src como padrão. Exemplo: '@/restante-do-path' que seria similar a '/src/restante-do-path'. isso evita de ficar "navegando" nas pastas com ".."
- next.config.js: Configuração ativa com o novo appDir;
- componentes client-side: agora devem ter instrução "use client" no inicio do arquivo;
- componentes server-side: enviam componentes já "compilados" ao navegador, sem bundle js para funções react. Similar ao antigo processamento do getServerSideProps;

## POC:

- Continua funcionando bem a tática de uma primeira página pre-carregada do lado do servidor e novos fetchs sendo feitos pelo client;
- A fetch api nativa funciona bem tanto server quanto client, removendo a principio a nescessidade do axios e/ou outros pacotes;
- Organização de atomic-design funciona bem para o nivel de componentes client-side (atoms, molecules, organisms, templates);
- Organização de atomic-design para pages fica sendo server-side (já era, usando getServerSideProps).

## API usada para testes:

- https://pokeapi.co/
