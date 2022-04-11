const html = '<p>Olá mundo</p> <p>Olá de novo</p>';
const htmlRegularGreedy = /<.+>.+<\/.+>/g; //greedy - vai até o final do elemento que a expessão regular recebe
const htmlRegularNonGreedy = /<.+?>.+?<\/.+?>/g; //non-greedy - anda o mínimo possível do elemento que a expessão regular recebe

console.log(html.match(htmlRegularNonGreedy));