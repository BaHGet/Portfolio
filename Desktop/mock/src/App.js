import logo from './logo.svg';
import './App.css';
import TableMaker from './tableMaker'
import { useState } from 'react';

function App() {
  
  const [input, setInput] = useState('')
  const [condtion, setCondtion] = useState(true)
  const [mocks, setMocks] = useState([
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ])

  const hide = () =>{
    if(condtion){
      setMocks([
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ])
      setCondtion(false);
      }else{
        setMocks([
          {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
          {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
          {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
          {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
          {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
          {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ])
        setCondtion(true);
    }
  }

  const handleChange = (e) =>{
    if(!(e.target.value) || e.target.value===' '){
      setMocks([
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ])
    }
    setInput(e.target.value);
    
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setMocks(mocks.filter(obj => obj.name.toLowerCase() === input.toLowerCase()))
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TableMaker hide={hide} mocks={mocks} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
