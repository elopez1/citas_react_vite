import { Form, Header, ListPatients } from "./components";
import { useState, useEffect } from "react";
export const App = () => {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);;
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = id => {
    const patientActualizado = pacientes.filter(
      (paciente => paciente.id !== id)
    )
    setPacientes(patientActualizado)
  };
  
  return (
    <div id="uno" className=" container mx-auto mt-auto p-5 ">
      <Header />
      <div className="mt-20 md:flex">
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />

        <ListPatients
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
};
