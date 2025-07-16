import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

interface Input {
  name: string;
  email: string;
}
const TestReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<Input>();

  const submitForm: SubmitHandler<Input> = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="text"
            {...register("name", {
              required: { value: true, message: "name fields is required" },
              minLength: {
                value: 2,
                message: "Min lenght must be 2",
              },
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <input type="text" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}

          <button disabled={isLoading} type="submit">
            Submit
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default TestReactHookForm;
