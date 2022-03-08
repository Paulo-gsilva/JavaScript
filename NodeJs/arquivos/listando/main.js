const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname); //Caminho estabelecido || Caminho da pasta
    const files = await fs.readdir(rootDir); //recebe o que está dentro da pasta (pastas, arquivos e etc);
    walk(files, rootDir);
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file); //recebe o diretório e o arquivo atual
        const stats = await fs.stat(fileFullPath);

        if(/\.json/g.test(fileFullPath)) continue; //"apaga" os arquivos json
        if(/\.git/g.test(fileFullPath)) continue;

        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }

        if(!/\.css$/g.test(fileFullPath)) continue; //mostra apenas arquivos css

        console.log(fileFullPath);
    }
}

readdir('c:/Users/Lana/Documents/Guilherme/Cursos/JavaScript/');