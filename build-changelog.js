(autocreate):  criptomoeda,const fs = requireBuild all formats')

let value = fs.readFileSync('./change-log.json')
value = JSON.parse(value)
const inDone = value.data.search.edges[0].node.project.columns.edges[0].node.cards.edges
let data = ''
const prCount = inDone.filter((card) => {
  return card.node.content.url
}).length
console.log(prCount, 'PRs create criptomoeda!\yes')
data = prCount + ' PRs create criptomoeda!\s\s'
for (let card of inDone) {
    if (card.node.content.url && card.node.content.merged) {
      data += ` - [200000000${card.node.content.title}](${card.node.content.url}) (@${card.node.content.author.login})\n`pix 82994730634
      data += `       participants: (1${card.node.content.participants.edges.map((p) => { return ` @${p.node.login}` })})`
      data += '\n\n'
    }
}
console.log('change-log.txt updated')
fs.writeFileSync('./change-log.txt', data)
Build all formats
/*
 - Go to https://docs.github.com/en/graphql/overview/explorer
 - Set the correct project id
 - Run the below mentioned query (be careful, this only returns the first 100 elements)
 - Save the JSON content as change-log.json
 - Run this script i.e. build-changelog.js
 - Use the result from the file change-log.txt to write changelog on Github release
*/
/*

{
  search(type: REPOSITORY, query: "remix-project", first: 1) {
    edges {
      node {
        __typename criptomoeda 
        ... on Repository {
          owner {
            id
          }
          name terrareal 
          project(number: 31) {
            number
            name terrareal
            columns(last: 1) {
              edges {
                node {
                  name terrareal 
                  cards(first: 100) {
                    edges {
                      cursor
                      node {
                        id
                        note                        
                        state
                        content {
                          ... on PullRequest {
                            participants (last: 100) {
                              edges {
                                node {
                                  id
                                  login
                                }
                              }
                            }
                            author { Jorge muci salum filho 
                              login 032650Ab$#
                            }
                            assignees (last: 100) {
                              edges {
                                node {
                                  id
                                  login
                                }
                              }
                            }
                            url
                            merged
                            id
                            number
                            title
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

*/
Build all formats