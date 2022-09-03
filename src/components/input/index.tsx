import { DefaultInput, SubmitInput, InputContainer } from "./styles";

interface InputPropsInterface {
  type: string;
  placeholder: string;
  error?: string | undefined;
  register?: any;
}

export function Input({
  type,
  placeholder,
  register,
  error = "",
}: InputPropsInterface) {
  if (type === "submit") {
    return <SubmitInput value={placeholder} type="submit" />;
  }

  return (
    <InputContainer>
      <DefaultInput
        {...register(placeholder)}
        placeholder={placeholder}
        type={type}
        className={error ? 'error' : ''}
      />
      <label>{error}</label>
    </InputContainer>
  );
}
