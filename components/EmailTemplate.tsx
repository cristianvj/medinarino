import * as React from 'react';

interface FormData {
  name: string;
  email: string;
  type: string;
};

export const EmailTemplate: React.FC<Readonly<FormData>> = ({
  name,
  email,
  type,
}) => (
  <div>
    <h1>Esta persona se ha registrado con los siguientes datos:</h1>
    <ul>
      <li>Nombre: {name}</li>
      <li>Email: {email}</li>
      <li>Tipo: {type}</li>
    </ul>
  </div>
);