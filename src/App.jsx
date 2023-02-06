import React, {useState, useEffect} from 'react';
import './App.css';

const url = "https://type.fit/api/quotes";
let data; 
const numAleatorio = () => Math.floor(Math.random() * data.length) + 1

export default function App() {
  const [citacoes, setCitacoes] = useState({})

  useEffect(() => {
    getCitacoes()
  },[]);

  async function getCitacoes() {
    try {
      const res = await fetch(url);
      data = await res.json()
      setCitacoes(data[numAleatorio()]);
    } catch (error) {
      console.log("getCitacoes Error", error)
    }
  }

  return (
    <div className="App">
      <h1 className="titulo">Gerador de Citações</h1>
      <p className="citacoes">{citacoes.text}</p>
      <p className="autor">-{citacoes.author ? citacoes.author : "Desconhecido"}</p>
      <button className='botao' onClick={getCitacoes}>Nova citaçao</button>
    </div>
  );
}

