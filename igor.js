let bancoDeDados = [];

function create(item) {
  bancoDeDados.push(item);
  return item;
}

function read(index = null) {
  if (index === null) {
    return bancoDeDados;
  }
  return bancoDeDados[index] ?? null;
}

function update(index, novoItem) {
  if (index >= 0 && index < bancoDeDados.length) {
    bancoDeDados[index] = novoItem;
    return novoItem;
  }
  return null;
}

function deleteItem(index) {
  if (index >= 0 && index < bancoDeDados.length) {
    return bancoDeDados.splice(index, 1)[0];
  }
  return null;
}

create("Controles");
create("FonedeOuvido");
create("Computador");
console.log("Banco de dados:", read());
update(1, "Headphones");
console.log("Banco de dados:", read());
deleteItem(0);
console.log("Banco de dados:", read());
