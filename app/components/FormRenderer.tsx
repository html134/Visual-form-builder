"use client";
import React from 'react';

interface InputObject {
  id: number;
  type: string;
  label: string;
}

interface FormRendererProps {
  inputs: InputObject[];
}

export default function FormRenderer({ inputs }: FormRendererProps) {
  if (inputs.length === 0) {
    return <p>No inputs added yet.</p>;
  }

  return (
    <form className="form-preview" onSubmit={(e) => e.preventDefault()}>
      {inputs.map((input) => (
        <div key={input.id} className="form-group" style={{ marginBottom: '1rem' }}>
          <label htmlFor={`input-${input.id}`} style={{ display: 'block', fontWeight: 'bold' }}>
            {input.label}
          </label>
          <input
            id={`input-${input.id}`}
            type={input.type}
            name={`input-${input.id}`}
            placeholder={`Enter ${input.type}...`}
            className="input-field"
            style={{ padding: '8px', width: '100%', maxWidth: '300px' }}
          />
        </div>
      ))}
      <button type="submit" className="submit-button">
        Submit Form
      </button>
    </form>
  );
}