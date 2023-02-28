console.log("Probando probando");

let pronoun = ["la", "el"];
let adj = ["mejor", "masmejor"];
let noun = ["pagina", "dominio"];
let extension = [".com", ".io"];

console.log(pronoun);

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let u = 0; u < extension.length; u++) {
        console.log(pronoun[i] + adj[j] + noun[k] + extension[u]);
      }
    }
  }
}
