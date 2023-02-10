import React, {useState, useEffect} from 'react';
import './App.css';
import './appMobile.css';
const url = "https://type.fit/api/quotes";
let data; 
const numAleatorio = () => Math.floor(Math.random() * data.length) + 1

export default function App() {
  const [citacoes, setCitacoes] = useState({})
  const [background, setBackground] = useState('#ffffff');
  const [color, setColor] = useState('#000000');
  
  // citações aleatorias
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

  // mudar de cor aleatoriamente
  useEffect(() => {
    const randomColor = getRandomColor();
    setBackground(randomColor);
    setColor(randomColor);
  }, []);
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={{background, color, transition: 'background 2s' }} className="App">
      <div className="all">
      <h1 className="titulo">Citation Generator</h1>
      <p className="citacoes">{citacoes.text}</p>
      <p className="autor">Autor: {citacoes.author ? citacoes.author : "Desconhecido"}</p>
      <button className='botao' onClick={() => window.location.reload()}>Nova citação</button>
      </div>
    </div>
  );
}

