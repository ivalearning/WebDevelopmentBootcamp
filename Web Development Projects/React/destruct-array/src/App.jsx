
import cars from "./practice"

// import animals, {useAnimal} from "./data";

// console.log(animals);

// // destructuring animals array
//  const [cat, dog] = animals;
//  console.log(cat);      // vraci object { name: "cat", sound: "meow" }

//  // destructuring object inside the array
//  const {name: catName, sound: catSound} = cat; 
//  console.log(catSound);         // vraci meow

//  // destructuring useAnimal() function, ktera vraci animal.name a funkci
//  const [animal, makeSound] = useAnimal(cat);
//  console.log(animal);  // vraci cat
//  makeSound();   // vraci meow


 function App() {
    //console.log(cars);

    const [honda, tesla] = cars;
    //console.log(tesla);

    const {coloursByPopularity: [teslaTopColour  ], speedStats:{topSpeed: teslaTopSpeed} } = tesla;

    const { coloursByPopularity: [hondaTopColour  ], speedStats:{topSpeed: hondaTopSpeed} } = honda;    
    
  return (
        <table>
            <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            </tr>
            <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
            </tr>
            <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
            </tr>
        </table>
  );
}
 
export default App;