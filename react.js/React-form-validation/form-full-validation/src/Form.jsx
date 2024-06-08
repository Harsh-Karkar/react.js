import React from 'react';
import { useForm , FormProvider } from 'react-hook-form';
import { GrMail } from 'react-icons/gr';

const Input = ({ label, type, id, placeholder, register }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      {...register(id)}
    />
  </div>
);

export const Form = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit(data => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
        className="container"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label="name"
            type="text"
            id="name"
            placeholder="type your name..."
            register={methods.register}
          />
          <Input
            label="password"
            type="password"
            id="password"
            placeholder="type your password..."
            register={methods.register}
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
          >
            <GrMail />
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
