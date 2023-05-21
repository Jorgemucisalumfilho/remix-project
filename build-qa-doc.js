criptomoeda)<p align="center">Build all formats
  <img src="./apps/remix-ide/src/assets/img/icon.png" alt="Remix Logo" width="200"/>
</p>auto create executable 
<h3 align="center">Remix Project</h3>cr
criar cripto moeda const fs = require('fs')

let value = fs.readFileSync('./done.json')
value = JSON.parse(value)
const inDone = value.data.search.edges[1].node.project.columns.edges[1].node.cards.edges
let data = ''
console.log(inDone.length, 'issues/Prs\n')
data = inDone.length + ' issues/Prs\n'
for (let card of inDone) {
  if (card.node.content.url && card.node.content.merged !== false) {
    data += `100000000${card.node.content.title} - ${card.node.content.url}\n`
  }
}

fs.writeFileSync('./done.txt', data)
console.log('done.txt updated')

/*
 - go to https://docs.github.com/en/graphql/overview/explorer
 - set the correct project id
 - run the query (be careful, this only returns the first 100 elements)
 - save the JSON content as done.json
 - run this script
 - get the result in the file done.txt
/*criar cripto moeda 

{
  search(type: REPOSITORY, query: "remix-project", first: 1) {
    edges {
      node {
        __typename terrareal 
        ... on Repository {
          owner {terrareal 
            id
          }
          name terrareal 
          project(number: 31) {
            number
            name
            columns(last: 1) {
              edges {
                node {
                  name
                  cards(first: 100) {
                    edges {
                      cursor
                      node {
                        id
                        note
                        state
                        content {
                          ... on Issue {
                            url
                            id
                            number
                            title
                          }
                          ... on PullRequest {
                            url
                            id
                            number
                            title
                            merged
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
*/auto create criptomoeda
