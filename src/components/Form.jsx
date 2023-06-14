import { useState, useEffect } from "react";
import { Error } from "./Error";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
export const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [name, setName] = useState("");
  const [proprietary, setProprietary] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState("false");

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setName(paciente.name);
      setProprietary(paciente.proprietary);
      setEmail(paciente.email);
      setDate(paciente.date);
      setSymptoms(paciente.symptoms);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };
  const addPaciente = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Se Agrego exitosamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if ([name, proprietary, email, date, symptoms].includes("")) {
      console.log("hay al menos un campo vacio");

      setError(true);
      return;
    }
    setError(false);

    const objectPatient = {
      name,
      proprietary,
      email,
      date,
      symptoms,
    };

    if (paciente.id) {
      objectPatient.id = paciente.id;
      const patientActualizado = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objectPatient : pacienteState
      );
      setPacientes(patientActualizado);
      setPaciente({});
    } else {
      objectPatient.id = generarId();
      setPacientes([...pacientes, objectPatient]);
    }

    setName("");
    setProprietary("");
    setEmail("");
    setDate("");
    setSymptoms("");
  };
  // validacion de formulariol

  return (
    <div  className="  md:w-2/5 lg:w-3/5 mx-1">
      <h2  className="  font-black text-3xl text-white text-center ">
        Patient Monitoring
      </h2>

      <p className="font-black text-white text-3x1 text-center mb-10">
        Add Pacient And {""}
        <span className="text-indigo-600 font-bold">Manager</span>
      </p>

      <form
      id="dos"
        action=""
        onSubmit={handleSubmit}
        className="  bg-gray-300 bg-opacity-20 border-dashed border-4 border-blue-600 bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
              todos los campos son obligatorios
            </p>
          </Error>
        )}

        <div 
        className="">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            pet name
          </label>
          <input
            id="pet"
            type="text"
            placeholder=" name pet "
            className=" border-2 w-full p-2 mt-2 text-gray-500 rounded-md"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 uppercase font-bold"
          >
            name property
          </label>
          <input
            id="name"
            type="text"
            placeholder=" name property "
            className="border-2 w-full p-2 mt-2 text-gray-500 rounded-md"
            value={proprietary}
            onChange={(event) => setProprietary(event.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            e-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder=" email contact owner "
            className="border-2 w-full p-2 mt-2 text-gray-500 rounded-md"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            placeholder=" email contact owner "
            className="border-2 w-full p-2 mt-2 text-gray-500 rounded-md"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            symptoms
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Description los symptoms"
            value={symptoms}
            onChange={(event) => setSymptoms(event.target.value)}
          />
        </div>
        <input
          className="text-white bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2"
          id=""
          type="submit"
          name=""
          value={paciente.id ? "editar paciente" : "agregar paciente"}
        />
      </form>
    </div>
  );
};
