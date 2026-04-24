"use client";
import React, { useState } from 'react';

interface FormBuilderProps {
  inputs: { id: number; type: string; label: string }[];
  selectedType: string;
  setSelectedType: (type: string) => void;
  onAddInput: () => void;
}

export default function FormBuilder({ inputs, selectedType, setSelectedType, onAddInput }: FormBuilderProps) {
  return (
    <div className="form-container">
      <h2 className="form-title">Form Builder</h2>
      
      <label className="form-label">
        Select Input Type:
        <select
          className="form-select"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="email">Email</option>
          <option value="password">Password</option>
        </select>
      </label>
      
      <button className="form-button" onClick={onAddInput}>Add Input</button>

      <ul className="form-list">
        {inputs.map((input) => (
          <li key={input.id}>
            {input.label} - Type: {input.type}
          </li>
        ))}
      </ul>
    </div>
  );
}
