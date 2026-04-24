// app/builder/page.tsx
"use client";
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FormBuilder from './components/FormBuilder';
import FormRenderer from './components/FormRenderer';
import MiniNav from './components/MiniNav';
//moved interface up
interface InputObject {
  id: number;
  type: string;
  label: string;
}

export default function BuilderPage() {
  //bringing state up to main page.
  const [inputs, setInputs] = useState<InputObject[]>([]);
  const [selectedType, setSelectedType] = useState('text');
  const [activeView, setActiveView] = useState<'builder' | 'renderer'>('builder');
  //bringing add input and set inputs up
  function addInput() {
    const newInput: InputObject = {
      id: inputs.length + 1,
      type: selectedType,
      label: `Input ${inputs.length + 1}`,
    };
    setInputs([...inputs, newInput]);
  }
  
  //conditional render of navbar = 0
  const renderBuilder = () =>{
    if (activeView === 'builder') {
      return (
        <div>
        <h1>Form Builder</h1>
        <FormBuilder 
          inputs={inputs} 
          selectedType={selectedType}
          setSelectedType={setSelectedType} 
          onAddInput={addInput}/>
        </div>
        
    
      );
    } else {
      
      return (
        <div>
          <h1>Form Renderer</h1>
          <FormRenderer inputs={inputs} />
        </div>
        
      );
    }
  }

  return (
    <div>
      <Navbar />
      <MiniNav setActiveView={setActiveView}/>
      {renderBuilder()}
    </div>
  );
}
