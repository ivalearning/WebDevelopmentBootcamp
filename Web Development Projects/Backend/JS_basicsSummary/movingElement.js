const numbers = [1, 2, 3, 4]; 

const output = move(numbers, 1, 3);

console.log(output); 
// offset je zmena umisteni v array, -1 je o jedno doleva, 2 o dve doprava
function move(array, index, offset) { 
  const position = index + offset;  
  if (position >= array.length || position < 0) {
    console.error('Invalid offset.');
    return; 
  }
  
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}