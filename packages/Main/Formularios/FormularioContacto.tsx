import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  nombre: string;
  email: string;
  telefono?: string;
  mensaje?: string;
}

const FormularioContacto: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto pt-6 space-y-4"
    >
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="nombre"
        >
          Nombre (requerido)
        </label>
        <input
          type="text"
          id="nombre"
          {...register("nombre", { required: "El nombre es requerido" })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.nombre && (
          <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>
        )}
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="email"
        >
          Mail (requerido)
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "El email es requerido" })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="telefono"
        >
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          {...register("telefono")}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="mensaje"
        >
          Mensaje
        </label>
        <textarea
          id="mensaje"
          {...register("mensaje")}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
      </div>

      <p className="text-[12px] text-gray-500">
        Al enviar este formulario aceptas la política de privacidad
      </p>

      <div>
        <button
          type="submit"
          className="w-full font-bold bg-black text-white cursor-pointer shadow-md"
        >
          Solicitar contacto
        </button>
      </div>
    </form>
  );
};

export default FormularioContacto;
