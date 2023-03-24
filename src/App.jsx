import { useState } from 'react'
import { Tab, TabPanel } from './components/Tabs'


export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => setActiveIndex(index);

  return (
    <main>
      <TabPanel>
        <Tab onClick={() => handleClick(0)} label="Tab uno" isActive={activeIndex === 0}>
          Contenido uno
        </Tab>
        <Tab onClick={() => handleClick(1)} label="Tab dos" isActive={activeIndex === 1}>
          Contenido dos
        </Tab>
        <Tab onClick={() => handleClick(2)} label="Tab tres" isActive={activeIndex === 2}>
          Contenido tres
        </Tab>
      </TabPanel>
    </main>
  )
}

