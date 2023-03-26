import { useState } from 'react'
import { Tab, TabPanel } from './components/Tabs'
import './App.css'
import image1 from "./components/imagenes/bombon.jpg"
import image2 from "./components/imagenes/burbuja.jpg"
import image3 from "./components/imagenes/bellota.jpg"


export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => setActiveIndex(index);

  return (
    <div>
    <h2>EJERCICIO PESTAÑAS -  SANDY</h2>
    <h3>Chicas superpoderosas</h3>
    <main style={{ border: "2px solid white", fontFamily:'sans-serif', fontSize:20 }}>
      <TabPanel>
        <Tab onClick={() => handleClick(0)} label="Bombón" isActive={activeIndex === 0} >
          <div style={{ display: 'flex', background: '#FFB6C1', marginTop: 5, alignItems: 'center' ,borderRadius: 50}}>
            <img src={image1} alt="bombon" />
            <p style={{ padding: 0 }}>Bombón es la protagonista principal de la
              serie animada The Powerpuff Girls.</p>
          </div>
        </Tab>
        <Tab onClick={() => handleClick(1)} label="Burbuja" isActive={activeIndex === 1}>
          <div style={{ display: 'flex', background: '#ADD8E6', marginTop: 5, alignItems: 'center' ,borderRadius: 50}}>
            <img src={image2} alt="burbuja" />
            <p style={{ padding: 0 }}>Burbuja es parte del equipo de Las Chicas Superpoderosas,
              Ella es la alegría y la risa, siendo el "pegamento emocional"
              que une al trío de superhéroinas.</p>
          </div>
        </Tab>
        <Tab onClick={() => handleClick(2)} label="Bellota" isActive={activeIndex === 2}>
          <div style={{ display: 'flex', background: '#90EE90', marginTop: 5, alignItems: 'center' ,borderRadius: 50}}>
            <img src={image3} alt="bellota" />
            <p style={{ padding: 0 }}>Bellota es una de las protagonistas de The Powerpuff Girls ,
              Ella es la luchadora más dura del grupo
              y la más intrépida y testaruda del trío de superhéroes.
            </p>
          </div>
        </Tab>
      </TabPanel>
    </main>
    </div>
  )
}

