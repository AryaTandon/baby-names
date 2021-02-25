interface IName {
  id: number;
  name: string;
  sex: string;
  favouriteName: (id: number) => void
}

const Child = ({id, name, sex, favouriteName}: IName) => {
    return (
        <button 
        id={String(id)}
        onClick = {() => 
        favouriteName(id)}>
        { sex === "m" ? <div id="boy"> {name} </div> : <div id = "girl"> {name} </div> }
        </button>
    )
}
export default Child








// Previous versions / attempts at App.tsx for quick reference (ignore the below)...



// import React, { useState } from 'react';
// import './App.css';
// import babyNamesData from "./babyNamesData.json"
// import Child from "./Component/child"

// interface IName {
//   id: number;
//   name: string;
//   sex: string;
// }

// function App() {

//   const [input, setInput] = useState("");
//   // const [namesData, setNamesData] = useState<IName[]>(babyNamesData);
//   // const [filteredNames, setFilteredNames] = useState<IName[]>([]);
//   const [chosenid, setChosenid] = useState<number[]>([]);
//   const [byGender, setByGender] = useState<IName[][]>([]);

//   console.log(chosenid)

//   const nameMapper = ({ id, name, sex }: IName) => {
//     return (
//       <Child
//         id={id}
//         name={name}
//         sex={sex}
//         favouriteName = {() => {
//           setChosenid(chosenid.includes(id) ? chosenid.filter((e) => e !== id) : chosenid.concat(id));
//           let filteredByFaveNames = [filteredBySearchNames.filter((name: IName) => (chosenid.includes(id) ? chosenid.filter((e) => e !== id) : chosenid.concat(id)).includes(name.id) ? false : true), filteredBySearchNames.filter((name: IName) => chosenid.includes(name.id) ? true : false)];
//           setByGender(filteredByFaveNames);
//         }}
//       />
//     )
//   }

//   // const filterDisplayByGender = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//   //   if (event.currentTarget.id === "boy") {
//   //     = namesData.filter(({ sex }: IName) => sex === "m" ? true : false);
//   //     = faveNamesData.filter(({ sex }: IName) => sex === "m" ? true : false);
//   //   } else if (event.currentTarget.id === "girl") {
//   //     = namesData.filter(({ sex }: IName) => sex === "f" ? true : false);
//   //     = faveNamesData.filter(({ sex }: IName) => sex === "f" ? true : false);
//   //   } else {
//   //     = namesData);
//   //     = faveNamesData);
//   //   }
//   // }

//   const namesShowing = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(event.target.value);
//   }

//   const filterDisplayBySearch = ( {name}: {name: string} ) => {
//     return (
//       input.length > 0 ? (`${name.toLowerCase()}`).startsWith(`${input.toLowerCase()}`)
//     : true
//     )
//   }

//   // const favouriteName2 = (name: IName) => {
//   //     if (chosenid.includes(name.id)) { 
//   //       return true;
//   //     } else {
//   //       return false;
//   //     }
//   // }

//   // let sortedBabyNames = babyNamesData.sort((a, b) => (a.name > b.name) ? 1 : -1)
//   let sortedNames = babyNamesData.sort((a, b) => a.name.localeCompare(b.name));
//   let filteredBySearchNames = sortedNames.filter(filterDisplayBySearch);
//   let filteredByFaveNames = [filteredBySearchNames.filter((name: IName) => chosenid.includes(name.id) ? false : true), filteredBySearchNames.filter((name: IName) => chosenid.includes(name.id) ? true : false)];

//   console.log(byGender)

//   let mappedNames;
//   byGender.length > 0 ? mappedNames = byGender[0].map(nameMapper)
//   : mappedNames = filteredByFaveNames[0].map(nameMapper);

//   let mappedFaveNames;
//   byGender.length > 0 ? mappedFaveNames = byGender[1].map(nameMapper)
//   : mappedFaveNames = filteredByFaveNames[1].map(nameMapper);

//   return (
//     <div >
//       Search: <input
//         type="text"
//         onChange={namesShowing}
//       />
//       <br />
//       <br />
//       Filter: <button 
//       id="boy"
//       onClick = {() => setByGender(filteredByFaveNames.map((innerArr) => innerArr.filter((e) => e.sex === "m" ? true : false)))}>
//         Boy
//       </button>
//       <button 
//       id="girl"
//       onClick = {() => setByGender(filteredByFaveNames.map((innerArr) => innerArr.filter((e) => e.sex === "f" ? true : false)))}>
//         Girl
//       </button>
//       <button 
//       id="all"
//       onClick = {() => setByGender(filteredByFaveNames)}>
//         All
//       </button>
//       <hr />
//       Favourites: {mappedFaveNames}
//       <hr />
//       {mappedNames}
//     </div>
//   );
// }

// export default App;













  // Got favourite names to work by passing below function down into child component!

  // const favouriteName = ( id: number ) => {
    // let found = 0;
    // for (const element of listFaveNames) {
    //   if (element.id === id) {
    //     listFaveNames.splice(listFaveNames.indexOf(element), 1)
    //     filteredBySearchNames.concat(element)
    //     found = 1;
    //   } 
    // }
    // if (found === 1) {
    //   return true;
    // }
    // for (const element of listFaveNames) {
    //   if (element.id === id && found === 0) {
    //     listFaveNames.concat(element)
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }
  // }





// function App() {

//   const [input, setInput] = useState("");
//   const [namesData, setNamesData] = useState<IName[]>(babyNamesData);
//   const [faveNamesData, setFaveNamesData] = useState<IName[]>([]);

//   const nameMapper = ({ id, name, sex }: IName) => {
//     return (
//       <Child
//         id={id}
//         name={name}
//         sex={sex}
//         favouriteName = {favouriteName}
//       />
//     )
//   }

//   // Got favourite names to work by passing below function down into child component!

//   const favouriteName = (id: number) => {
//     let found = 0;
//     for (const element of namesData) {
//       if (element.id === id) {
//         found = 1;
//         setFaveNamesData(faveNamesData.concat(element));
//         setNamesData(namesData.filter(element => element.id !== id));
//       } 
//     }
//     for (const element of faveNamesData) {
//       if (element.id === id && found === 0) {
//         setFaveNamesData(faveNamesData.filter(element => element.id !== id));
//         setNamesData(namesData.concat(element));
//       } 
//     }
//   }

//   // Don't know how to get gender filter buttons to work
//   // Uncommenting the below, alongside lines 90-104, introduces these buttons 
//   // But - if you test them - not in a way which works properly!

//   const filterDisplayByGender = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     if (event.currentTarget.id === "boy") {
//       setNamesData(namesData.filter(({ sex }: IName) => sex === "m" ? true : false));
//       setFaveNamesData(faveNamesData.filter(({ sex }: IName) => sex === "m" ? true : false));
//     } else if (event.currentTarget.id === "girl") {
//       setNamesData(namesData.filter(({ sex }: IName) => sex === "f" ? true : false));
//       setFaveNamesData(faveNamesData.filter(({ sex }: IName) => sex === "f" ? true : false));
//     } else {
//       setNamesData(namesData);
//       setFaveNamesData(faveNamesData);
//     }
//   }

//   const namesShowing = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(event.target.value);
//   }

//   const filterDisplayBySearch = ( {name}: {name: string} ) => {
//     return (
//       input.length > 0 ? (`${name.toLowerCase()}`).startsWith(`${input.toLowerCase()}`)
//     : true
//     )
//   }

//   // let sortedBabyNames = babyNamesData.sort((a, b) => (a.name > b.name) ? 1 : -1)
//   let sortedNames = namesData.sort((a, b) => a.name.localeCompare(b.name));
//   let filteredBySearchNames = sortedNames.filter(filterDisplayBySearch);
//   let mappedNames = filteredBySearchNames.map(nameMapper)

//   let sortedFaveNames = faveNamesData.sort((a, b) => a.name.localeCompare(b.name));
//   let filteredBySearchFaveNames = sortedFaveNames.filter(filterDisplayBySearch);
//   let mappedFaveNames = filteredBySearchFaveNames.map(nameMapper);

//   return (
//     <div >
//       Search: <input
//         type="text"
//         onChange={namesShowing}
//       />
//       <br />
//       <br />
//       Filter: <button 
//       id="boy"
//       onClick = {filterDisplayByGender}>
//         Boy
//       </button>
//       <button 
//       id="girl"
//       onClick = {filterDisplayByGender}>
//         Girl
//       </button>
//       <button 
//       id="all"
//       onClick = {filterDisplayByGender}>
//         All
//       </button>
//       <hr />
//       Favourites: {mappedFaveNames}
//       <hr />
//       {mappedNames}
//     </div>
//   );
// }

// export default App;





// Below - over-complicated version of code for trying to get gender filter buttons to work
// Introduced more states, but worked badly & probably went in the wrong direction!



// import React, { useState } from 'react';
// import './App.css';
// import babyNamesData from "./babyNamesData.json"
// import Child from "./Component/child"

// interface IName {
//   id: number;
//   name: string;
//   sex: string;
// }

// // let filteredByGenderNames: IName[] = []
// // let filteredByGenderFaveNames: IName[] = []
// let mappedNames: JSX.Element[] = []
// let mappedFaveNames: JSX.Element[] = []

// function App() {

//   const [input, setInput] = useState("");
//   const [faveNamesData, setFaveNamesData] = useState<IName[]>([]);
  // const [filteredByGenderNames, setFilteredByGenderNames] = useState<IName[]>([]);
  // const [filteredByGenderFaveNames, setFilteredByGenderFaveNames] = useState<IName[]>([]);
//   // const [refresh, setRefresh] = useState(true);

//   const nameMapper = ({ id, name, sex }: IName) => {
//     return (
//       <Child
//         id={id}
//         name={name}
//         sex={sex}
//         favouriteName = {favouriteName}
//       />
//     )
//   }

//   const favouriteName = (id: number) => {
//     let found = 0;
//     for (const element of babyNamesData) {
//       if (element.id === id) {
//         found = 1;
//         setFaveNamesData(faveNamesData.concat(element));
//         babyNamesData.splice(babyNamesData.indexOf(element), 1);
//       } 
//     }
//     for (const element of faveNamesData) {
//       if (element.id === id && found === 0) {
//         setFaveNamesData(faveNamesData.filter(element => element.id !== id));
//         babyNamesData.push(element);
//       } 
//     }
//   }

//   const namesShowing = (event: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(event)
//     console.log(event.currentTarget)
//     setInput(event.target.value);
//   }

//   const filterDisplayBySearch = ( {name}: {name: string} ) => {
//     return (
//       input.length > 0 ? (`${name.toLowerCase()}`).startsWith(`${input.toLowerCase()}`)
//     : true
//     )
//   }

//   // let sortedBabyNames = babyNamesData.sort((a, b) => (a.name > b.name) ? 1 : -1)
//   let sortedBabyNames = babyNamesData.sort((a, b) => a.name.localeCompare(b.name));
//   let filteredBySearchNames = sortedBabyNames.filter(filterDisplayBySearch);

//   let sortedFaveNames = faveNamesData.sort((a, b) => a.name.localeCompare(b.name));
//   let filteredBySearchFaveNames = sortedFaveNames.filter(filterDisplayBySearch);

//   const filterDisplayByGender = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     console.log(event)
//     console.log(event.currentTarget)
//     if (event.currentTarget.id === "boy") {
//       setFilteredByGenderNames(filteredBySearchNames.filter(({ sex }: IName) => sex === "m" ? true : false));
//       setFilteredByGenderFaveNames(filteredBySearchFaveNames.filter(({ sex }: IName) => sex === "m" ? true : false));
//     } else if (event.currentTarget.id === "girl") {
//       setFilteredByGenderNames(filteredBySearchNames.filter(({ sex }: IName) => sex === "f" ? true : false));
//       setFilteredByGenderFaveNames(filteredBySearchFaveNames.filter(({ sex }: IName) => sex === "f" ? true : false));
//     } else {
//       setFilteredByGenderNames(filteredBySearchNames);
//       setFilteredByGenderFaveNames(filteredBySearchFaveNames);
//     }
//   }


//   filteredByGenderNames.length > 0 ? mappedNames = filteredByGenderNames.map(nameMapper)
//   : mappedNames = filteredBySearchNames.map(nameMapper);

//   filteredByGenderNames.length > 0 ? mappedFaveNames = filteredByGenderFaveNames.map(nameMapper)
//   : mappedFaveNames = filteredBySearchFaveNames.map(nameMapper);

//   return (
//     <div >
//       Search: <input
//         type="text"
//         onChange={namesShowing}
//       />
//       <br />
//       <br />
//       Filter: <button 
//       id="boy"
//       onClick = {filterDisplayByGender}>
//         Boy
//       </button>
//       <button 
//       id="girl"
//       onClick = {filterDisplayByGender}>
//         Girl
//       </button>
//       <button 
//       id="all"
//       onClick = {filterDisplayByGender}>
//         All
//       </button>
//       <hr />
//       Favourites: {mappedFaveNames}
//       <hr />
//       {mappedNames}
//     </div>
//   );
// }

// export default App;
