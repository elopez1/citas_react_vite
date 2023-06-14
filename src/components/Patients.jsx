import Swal from "sweetalert2";
export const Patients = ({ paciente, setPaciente, eliminarPaciente }) => {
  const {  name, proprietary, id, email, date, symptoms } = paciente;

  const handleborrar =()=>{
  Swal.fire({
    title: 'ALERTA ',
    text: "Deseas Eliminaar",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'SI'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Borrado!',
        'Exitosamente',
        ''
      )
      eliminarPaciente(id)
    }
  })
}

const handleEditar = () => {
  Swal.fire({
    title: 'ALERTA',
    text: '¿Deseas editar?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'SI'
  }).then((result) => {
    if (result.isConfirmed) {
      setPaciente(paciente)
    }else{
      Swal.fire({
    title: 'UPS',
    icon: 'error',
    text:"Sigue tu Camino"
      })
      
    }
  });
};



  return (
    <div id="dos"  className=" border-dashed border-4 border-blue-600border-dashed italic mx-14 my-10  bg-gray-300 bg-opacity-20   px-12 py-10 rounded-t-lg bor border-blue-600">
      <p  className=" text-2xl text-white-600 font-bold mb-3 uppercase">
        Name: {}
        <span className="font-normal normal-case"> {name} </span>
      </p>
      <p className="text-2xl font-bold mb-3 text-white-600 uppercase">
        Propitary: {}
        <span className="font-normal normal-case">{proprietary} </span>
      </p>
      <p className=" text-2xl font-bold mb-3 text-white-600 uppercase">
        email: {""}
        <span className="font-normal normal-case"> {email} </span>
      </p>
      <p className=" text-2xl font-bold mb-3 text-white-600 uppercase">
        discharge date {""}
        <span className="font-normal normal-case"> {date} </span>
      </p>
      <p className="text-2xl font-bold mb-3 text-white-600 uppercase">
        Symptoms {""}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="flex justify-end">
        <button 
        type="button"
        className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-400 font-medium rounded-full text-sm px-8 py-4 text-center mr-4 mb-4 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={handleEditar}>
          Editar
        </button>
        
        <button 
        onClick={ handleborrar}
        type="button"
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-6 py-4 text-center mr-4 mb-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        Eliminar
        </button>
        
      </div>
    </div>
  );
};
