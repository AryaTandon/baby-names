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