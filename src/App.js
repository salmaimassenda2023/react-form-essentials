import React, {useState} from "react";
import './App.css';

function Header(){
  return( <h1>Les Librairirs Front </h1>)
}
function Component({title,link}){
  return(
      <a href={link} >{title}</a>
  )
}
function Form({change,submit}){
  return(
      <>
          <form onSubmit={submit} className="space-between">
              <input type="text" name="title" placeholder="title" onChange={change}/>
              <input type="text"  name="link" placeholder="link" onChange={change}/>
              <button type="submit" >Add</button>
          </form><br/><br/>
      </>
  )
}
function App() {
  const libraries=[{title:"React",link:"https://reactjs.org/"},
    {title:"Angular",link:"https://angular.io/"},
    {title:"Vue Js",link:"https://vuejs.org/"},
    {title:"Bootsrap",link:"https://https://getbootstrap.com//"}
  ];
  const [input,setInput]=useState({});
  const [items,setItems]=useState(libraries);
  //les fonctions gestionnaires
  const HandleOnCange=(e)=>{
      //cela utile pour ajouter les nv champs au autres champs du form
      setInput({...input,[e.target.name]:[e.target.value] });
      console.log(input);

  }
    const HandleOnSubmit=(e)=>{
      e.preventDefault();
      setItems([input,...items]);
      setInput({});

    }
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <Form submit={HandleOnSubmit} change={HandleOnCange} />
        {
            items.map(lib =>{
            return(
                <Component link={lib.link} title={lib.title} key={lib.link}/>
            )})
        }
      </header>
    </div>
  );
}

export default App;
