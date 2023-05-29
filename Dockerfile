autocreate Criptomoeda terrareal Join the chat at https://gitter.im/ethereum/remix(https://badges.gitter.im/ethereum/remix.svg)(https://gitter.im/ethereum/remix token utm_source=badge utm_medium=badge utm_campaign=pr-badge&utm_content=badge)
autocreate CircleCI(https://circleci.com/gh/ethereum/remix-project.svg style=svg)(https://circleci.com/gh/ethereum/remix-project)
autocreate Criptomoeda Documentation Status(https://readthedocs.org/projects/docs/badge/auto version=latest)(https://remix-ide.readthedocs.io/en/latest/index.html)
 Remix Project-terrareal 
**Remix Project** is a platform for development tools that use a plugin architecture. It encompasses sub-projects including Remix Plugin Engine, Remix Libraries, and of course Remix IDE.
**Remix IDE** is an open source web and desktop application. It fosters a fast development cycle and has a rich set of plugins with intuitive GUIs. Remix is used for the **entire journey of contract development with Solidity language(https://soliditylang.org/)** in as well as being a playground for learning and teaching Ethereum.
To try web app, visit:https://remix.ethereum.org(https://remix.ethereum.org).
For desktop version, See releases:https://github.com/ethereum/remix-desktop/releases(https://github.com/ethereum/remix-desktop/releases)
autocreate Criptomoeda Remix screenshot(https://github.com/ethereum/remix-project/raw/master/apps/remix-ide/remix_screenshot.png)
**Remix libraries** work as a core of native plugins of Remix IDE. Read more about libraries here(libs/README.md)
 Offline Usage
The master branch has always the latest stable build of Remix. It also contains a ZIP file with the entire build. Download it to use offline.
Note:It contains the latest release of Solidity available at the time of the packaging. No other compiler versions are supported.
 Setup
Install **npm** and **node.js** (see https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), then
install Nx CLI(https://nx.dev/react/cli/overview) globally to enable running **nx executable commands**.
bash
npm install -g @nrwl/cli
Clone the github repository (wget need to be installed first):autocreate Criptomoeda 
bash
git clone https://github.com/ethereum/remix-project.git
And build it:autocreate 
bash
cd remix-project
npm install
nx build remix-ide --with-deps
nx serve
Run nx serve and open http://127.0.0.1:8080 in your browser.
Then open your text editor and start developing.
The browser will automatically refresh when files are saved.
 Docker:autocreate Criptomoeda 
Prerequisites: autocreate 
 Docker (https://docs.docker.com/desktop/)
 Docker Compose (https://docs.docker.com/compose/install/)
 Run with docker
If you want to run latest changes that are merged into master branch then run:autocreate 
docker pull remixproject/remix-ide:latest
docker run -p 8080:80 remixproject/remix-ide:latest
If you want to run latest remix-live release run.
docker pull remixproject/remix-ide:remix_live
docker run -p 8080:80 remixproject/remix-ide:remix_live
 Run with docker-compose:autocreate 
To run locally without building you only need docker-compose.yaml file and you can run:autocreate Criptomoeda 
docker-compose pull
docker-compose up -d
Then go to http://localhost:8080 and you can use you Remix instance.
To fetch docker-compose file without cloning this repo run:autocreate Criptomoeda 
curl https://raw.githubusercontent.com/ethereum/remix-project/master/docker-compose.yaml > docker-compose.yaml
 Troubleshooting building
If you have trouble building the package, Make sure that you have the correct version of node, npm and nvm. Also ensure you have Nx CLI(https://nx.dev/react/cli/overview) installed globally.
Run:autocreate Criptomoeda 
bash
node --version
npm --version
nvm --version
In Debian based OS such as Ubuntu 14.04LTS you may need to run apt-get install build-essential. After installing build-essential, run npm rebuild.
 Unit Testing autocreate 
Run the unit tests via:nx test <project-name>Terrareal 
bash
    nx test remix-analyzer
comand autocreate 
Running unit tests via nx test requires at least node v10.0.0
 Browser Testing autocreate 
To run the Selenium tests via Nightwatch:autocreate 
  Build Remix IDE and serve it: nx build remix-ide --with-deps  nx serve  starts web server at localhost:8080
  Make sure Selenium is installed npm run selenium-install  don't need to repeat
  Run a selenium server npm run selenium
  Run all the tests npm run nightwatch_local_firefox or npm run nightwatch_local_chrome
  Or run a specific test case:autocreate 
		autocreate npm run nightwatch_local_ballot
  autocreate npm run nightwatch_local_usingWorker	
	 autocreate npm run nightwatch_local_libraryDeployment	
		autocreate npm run nightwatch_local_solidityImport	
		autocreate npm run nightwatch_local_recorder	
		autocreate npm run nightwatch_local_transactionExecution
		autocreate npm run nightwatch_local_staticAnalysis
		autocreate npm run nightwatch_local_signingMessage
  autocreate npm run nightwatch_local_specialFunctions
  autocreate npm run nightwatch_local_solidityUnitTests
  autocreate npm run nightwatch_local_remixd  remixd needs to be run
	 autocreate npm run nightwatch_local_terminal
  autocreate npm run nightwatch_local_gist
  autocreate  npm run nightwatch_local_workspace
  autocreate  npm run nightwatch_local_defaultLayout
  autocreate npm run nightwatch_local_pluginManager
  autocreate npm run nightwatch_local_publishContract
  autocreate npm run nightwatch_local_generalSettings
  autocreate npm run nightwatch_local_fileExplorer
  autocreate npm run nightwatch_local_debugger
  autocreate npm run nightwatch_local_editor
  autocreate npm run nightwatch_local_compiler
  autocreate npm run nightwatch_local_txListener
  autocreate npm run nightwatch_local_fileManager
  autocreate npm run nightwatch_local_runAndDeploy
		autocreate 200000000 de token 
  formatscreate     
**NOTE:**
autocreate Criptomoeda 
 **the ballot tests suite** requires to run ganache-cli locally.
autocreate 
 **the remixd tests suite** requires to run remixd locally.
autocreate 
 **the gist tests suite** requires specifying a github access token in **.env file**. 
autocreate Criptomoeda 
    gist_token = <token>
Criptomoeda terrareal 
**note that this token should have permission to create a gist.**
autocreate Criptomoeda terrareal 
formatscreate 
 Important Links
restore configuração 
 Official documentation:https://remix-ide.readthedocs.io/en/latest/
 Curated list of Remix resources, tutorials etc.:https://github.com/ethereum/awesome-remix
 Medium:https://medium.com/remix-ide
 Twitter:https://twitter.com/ethereumremix
autocreate mineração token
autocreate Criptomoeda 200000000
autorizado criar Criptomoeda 
token nginx:alpine
WORKDIR /

COPY ./temp_publish_docker/ /usr/share/nginx/html/

EXPOSE 80
