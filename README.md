# Esta é uma aula organizada por Carlos Rosa e Jônatas Lima

## Nela será abordado
- **Parte 1: O que é API**
  - O que é API 
  - Tipos de API 
  - Documentação sobre APIs
- **Parte 2: API de pokemon utilizando a [PokéAPI](https://pokeapi.co/)** 
  - Aprendendo a utilizar a API 
  - Criar uma função para consumir a API 
  - Colocar o pokémon na tela 
- **Parte 3: API do Mercado Livre utilizando o [endpoint utilizado](https://api.mercadolibre.com/sites/MLB/search?q=computador)** 
  - Aprendendo a utilizar a API 
  - Criar uma função para consumir a API 
  - Colocar o primeiro computador do array na tela 
- **Parte 4: API do Studio Ghibli utilizando a [Studio Ghibli API](https://ghibliapi.herokuapp.com/)** 
  - Aprendendo a utilizar a API 
  - Função para retornar os filmes 
  - Função para criar filmCard 
  - Carregar os FilmCards na tela de forma dinâmica  <br><br>
 
## O que é API

**Breve resumo:** Uma API é um endereço, quando você requere uma API você recebe as informações que ela tem para te oferecer, uma API é um conjunto de dados. Existem 3 tipos de API: 
- **API Privada:** A API é usada apenas internamente. Isso oferece às empresas um maior controle.
- **API de Parceiros:** A API é compartilhada com parceiros de negócios específicos. Isso pode fornecer fluxos de receita adicionais sem comprometer a qualidade.
- **API Pública:** A API é disponibilizada para todos. Terceiros podem desenvolver aplicações que interajam com a sua API e isso pode se tornar uma fonte de inovação.

##### Documentação
- O que é API -> https://www.redhat.com/pt-br/topics/api/what-are-application-programming-interfaces#apis <br>
- APIs públicas -> https://github.com/public-apis/public-apis#anime

**OBS:** É preciso conhecer a estrutura da API que pretende utilizar para conseguir manipular esses dados, existem alguns padrões de estruturas de dados, um dos formatos mais utilizados é o JSON, no curso da Trybe damos preferência a ele. <br><br>

## Do 0 ao pokémon na tela

#### Ato 1 - Aprender sobre como usar a API
- API de pokémon
- O que é um endpoint 
- Estudar o objeto que a API retorna

#### Ato 2 - Criar uma função para consumir a API
- Breve descrição sobre Função assíncrona
- Criar a função fetchAPI que deve retornar os dados do pokémon passado como parâmetro

#### Ato 3 - Colocar o pokémon na tela
- Mostrar que mesmo tendo pego a API corretamente,  ainda é necessário outro async await para usar o resultado
- Capturar o HTML
- substituir os dados do HTML pelos dados do pokemon <br><br>

## Do 0 ao computador na tela

#### Ato 1 - Aprender sobre como usar a API
- API do mercado livre
- acessar a API com o endpoint computador
- Estudar o objeto que a API retorna

#### Ato 2 - Criar uma função para consumir a API
- Criar a função fetchAPI que deve retornar os dados dos computadores 

#### Ato 3 - Colocar o primeiro computador do array na tela
- Montar o html
- Capturar o DOM
- Montar o computador na tela titulo, preco, imagem <br><br>

## Studio Ghibli

#### Ato 1 - Função para retornar os filmes
- https://ghibliapi.herokuapp.com/films
- Função fetchAPI utilizando o endpoint para retornar todos os filmes

#### Ato 2 - Função para criar filmCard
- essa função deve receber um parâmetro
- criar um container com a classe filmCard
- esse container deve ter um o título e uma imagem
- montar seu container recebendo como filhos o título e a imagem do filme passado como parâmetro e retornar esse container

#### Ato 3 - Carregar os FilmCards na tela de forma dinâmica 
- Essa função recebe como parâmetro os dados retornados pela API com todos os filmes
- Percorre esses dados e para cada filme, monta ele no formato FilmCard e adiciona na tela 

##### Ato 4 - Monta toda a estrutura de filmes antes de carregar a página

