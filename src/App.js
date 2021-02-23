import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['rajjak','anwor','jafor','alomgir','salman','imran', 'dsga', 'sakib','tdsgasd']
  const products =[
    {name:'photoshop',price:'$99.99'},
    {name:'photoshop',price:'$99.99'},
    {name:'Illustratur',price:'$88.99'},
    {name:'PDF reader',price:'$69.99'},
    {name:'reader',price:'$9.99'},
    {name:'reader',price:'$9.99'},
]



  return (
    <div className="App">
      <header className="App-header"> 
        <p>i am react person</p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li>)
          }
          {
            products.map(product=><li>{product.name} - price = {product.price}</li>)
          }
        </ul>

        {
          products.map(pd=><Product product={pd}></Product>)
        }

        <Person name='imran' job="playing football"></Person>
        <Person name='sgdasd' job="cricket playing"></Person>
        <Person name='asd' job="web developer"></Person>

      </header>
    </div>
  );
}

  function Counter(){
    const [count, setCount]=useState(0);
    
    return(
      <div>
        <h1>Count : {count} </h1>
        <button style={{cursor:'pointer'}} onClick={()=>
     setCount(count+1)}>Incrase</button>
        <button style={{cursor:'pointer'}} onClick={()=>
     setCount(count-1)}>decrase</button>
      </div>
    )
  }
 function Users(){
   const [users,setUsers]= useState([]);
   useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .then(data=>setUsers(data))
   },[])
   return (
     <div>
       <h3>Dynamic Users:{users.length}</h3>
       <ul>
         {
           console.log(users)
         }
         {
           users.map(user => <li>{user.name} </li>)
         }
       </ul>
     </div>
   )
 }
function Product(props){
  const productStyle={
    border:'2px solid red',
    borderRadius:'5px',
    backgroundColor:'yellow',
    height:'250px',
    width:'70%',
    color:'black',
    float:'left',
    margin:'10px'
  }
  const {name,price}= props.product;
  console.log(name,price);
return (
  <div style={productStyle}>
    <h2>{name}</h2>
    <h2>{price}</h2>
    
    <button style={{cursor:'pointer'}}>Buy Now</button>
  </div>
)
}
function Person(props){
  return (
    <div style={{border:'2px solid red', width:'400px', margin:'10px'}}>
      <h3>My Name : {props.name} </h3>
      <p>My profession : {props.job} </p>
    </div>
  )
}

export default App;

