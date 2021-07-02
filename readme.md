# UI Clone Projects

![GitHub](https://img.shields.io/github/license/AlissonRaphael/ui_clone_projects)

This repository contains UI clones of various webapps for student purposes. Using several React ecosystem libraries, such as styled-components, react-icons, react-router.

![](https://github.com/AlissonRaphael/reactjs_ui_clone_projects/blob/main/readme_react.jpg)
![](https://github.com/AlissonRaphael/reactjs_ui_clone_projects/blob/main/readme_styled_components.jpg)
![](https://github.com/AlissonRaphael/reactjs_ui_clone_projects/blob/main/readme_react_icons.jpg)
![](https://github.com/AlissonRaphael/reactjs_ui_clone_projects/blob/main/readme_react_router.jpg)
![](https://github.com/AlissonRaphael/reactjs_ui_clone_projects/blob/main/readme_framer_motion.jpg)


## Contents
- [Installation](#installation)
- [Projects](#projects)
- [Contact](#contact)
- [License](#license)

## Projects
### Discord

Discord é uma plataforma de chat em grupo construída originalmente para jogadores, mas que desde então se tornou uma plataforma de uso geral para todos os tipos de comunidades.

![](https://github.com/AlissonRaphael/reactjs_ui_clone_projects/blob/main/discord/discord.gif)

### Insomnia Core

The Desktop API client for Rest and GraphQL. Make requests, inspect responses.

![](https://raw.githubusercontent.com/AlissonRaphael/reactjs_ui_clone_projects/main/insomnia/screenshot.gif)

### Pipefy

Pipefy is a no/low-code business process management platform that empowers teams to automate workflows and make processes hassle-free from request to delivery.

![](https://raw.githubusercontent.com/AlissonRaphael/reactjs_ui_clone_projects/main/pipefy/pipefy.gif)

## Installation
Only requires a stable version of Node.js with node package manager (NPM).

### Windows:

Download the Windows Installer directly from the website [nodejs.org](https://nodejs.org/en/).

or via package manager:

__Using chocolatay__
```sh
cinst nodejs.install
```

### Linux:

From Debian and Ubuntu based Linux distributions, Enterprise Linux/Fedora and Snap packages

__Install a binary package via pkg__:
```sh
pkg install node
```

### macOS X:

Download the macOS Installer directly from the website [nodejs.org](https://nodejs.org/en/).

Via package manager:

__Using bash__
```sh
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```
__Using brew__
```sh
brew install node
```

### Yarn (optional):

Via package manager:
```sh
npm install -g yarn
```

### Clone

Clone this repo to your local machine using `https://github.com/AlissonRaphael/ui_clone_projects.git`

Clone specific project:
```sh
# A partir da versão 2.19.
git --version

# Criar e entrar em um diretório.
mkdir diretorio && cd diretorio

# Iniciar um repositório.
git init

# Rastrear o repositório.
git remote add -f origin https://github.com/AlissonRaphael/reactjs_ui_clone_projects

# Configurar o recurso de verificação em árvore.
git config core.sparseCheckout true

# Crie um arquivo dentro do diretório oculto .git: .git/info/sparse-checkout
# Inserir no arquivo o nome do sub-diretório que você deseja clonar.
echo 'nome do sub-diretório' >> .git/info/sparse-checkout

## Fazer o download com o pull e não com o clone
git pull origin master
```

## Contact
- Github: [alissonraphael](https://gist.github.com/AlissonRaphael)
- Twitter: [@AlissonRaphaeI](@AlissonRaphaeI)

## License

![GitHub](https://img.shields.io/github/license/alissonraphael/ui_clone_projects)
