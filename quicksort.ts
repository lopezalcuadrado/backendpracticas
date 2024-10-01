let lista = [4, 4, 7, 3, 2, 5, 6, 8, 4, 1, 6];

function quicksort(arr: number[]) {
  if (arr.length <= 1) return arr; // Si está vacío o tiene un solo elemento, ya está ordenado

  let pivote = arr[arr.length - 1]; // El pivote será el último elemento del array
  let menores: number[] = [];
  let iguales: number[] = [];
  let mayores: number[] = [];

  //  forEach  recorre el array y lo separa en menores, iguales y mayores al pivote
  arr.forEach((elemento) => {
    if (elemento < pivote) menores.push(elemento);
    else if (elemento > pivote) mayores.push(elemento);
    else iguales.push(elemento);
  });

  return quicksort(menores).concat(iguales).concat(quicksort(mayores));
}

console.log("Resultado final:", quicksort(lista));
