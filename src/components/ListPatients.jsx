/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Patients } from "./Patients";
export const ListPatients = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className=" text-white md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">List Patients</h2>
          <p className="text-white text-xl mt-5 mb-10 text-center">
            Manage your tus {""}
            <span className="text-indigo-600 font-bold text-xl">
              patients and Appointments
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Patients 
            key={paciente.id} 
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />
      ))} 
      </>
      ) : (
        <>
          {" "}
          <h2 className="font-black text-3xl text-center">no hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            start adding patients{""}
            <span className="text-indigo-600 font-bold text-xl">
              {" "}
              and they will appear in this place
            </span>
          </p>
        </>
      )}
    </div>
  );
};
