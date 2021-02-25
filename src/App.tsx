import React, { useState } from 'react';
import './App.css';
import babyNamesData from "./babyNamesData.json"
import Child from "./Component/child"

interface IName {
  id: number;
  name: string;
  sex: string;
}

function App() {

  // Using state hooks not for the arrays themselves, but for specific values which change when pressing buttons
  // These values are in turn used as part of the normal "let..." declaration of the arrays

  const [input, setInput] = useState("");
  const [faveIDs, setFaveIDs] = useState<number[]>([]);
  const [chosenSex, setChosenSex] = useState("");

  const checkIfAlreadyFave = (id: number) => {
    return (
    faveIDs.includes(id) ? faveIDs.filter((e) => e !== id) 
    : faveIDs.concat(id)
    )
  }

  const nameMapper = ({ id, name, sex }: IName) => {
    return (
      <Child
        id={id}
        name={name}
        sex={sex}
        favouriteName = {(id) => {setFaveIDs(checkIfAlreadyFave(id))}}
      />
    )
  }

  const namesShowing = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setInput(event.target.value);
  }

  const filterDisplayBySearch = ( {name}: {name: string} ) => {
    return (
      input.length > 0 ? (`${name.toLowerCase()}`).startsWith(`${input.toLowerCase()}`)
    : true
    )
  }

  const filterNonFaves = (name: IName) => {
      return (
      faveIDs.includes(name.id) ? false
      : true
      )
  }

  const filterFaves = (name: IName) => {
    return (
      faveIDs.includes(name.id) ? true
      : false
      )
  }

  const filterByGender = (innerArr: IName[]) => {
    return (
      innerArr.filter((e) => 
      e.sex.includes(chosenSex) ? true 
      : false)
    )
  }

  // let sortedBabyNames = babyNamesData.sort((a, b) => (a.name > b.name) ? 1 : -1)
  let sortedNames = babyNamesData.sort((a, b) => a.name.localeCompare(b.name));
  let filteredBySearchNames = sortedNames.filter(filterDisplayBySearch);
  let filteredByFaveNames = [filteredBySearchNames.filter(filterNonFaves), filteredBySearchNames.filter(filterFaves)];
  let filteredByGender = filteredByFaveNames.map(filterByGender)
  let mappedNames = filteredByGender[0].map(nameMapper)
  let mappedFaveNames = filteredByGender[1].map(nameMapper)

  return (
    <div >
      Search: <input
        type="text"
        onChange={namesShowing}
      />
      <br />
      <br />
      Filter: <button 
      id="boy"
      onClick = {() => {
        setChosenSex("m")
      }}>
        Boy
      </button>
      <button 
      id="girl"
      onClick = {() => {
        setChosenSex("f")
      }}>
        Girl
      </button>
      <button 
      id="all"
      onClick = {() => {
        setChosenSex("")
      }}>
        All
      </button>
      <hr />
      Favourites: {mappedFaveNames}
      <hr />
      {mappedNames}
    </div>
  );
}

export default App;