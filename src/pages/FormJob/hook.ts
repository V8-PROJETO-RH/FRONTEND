import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  description: string,
  assignments: string,
  requisites: string,
  salary: string,
  benefits: string,
  quantity: string,
  responsible: string
}

export default function useFormJob() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors
  }
}