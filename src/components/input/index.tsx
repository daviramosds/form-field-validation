import { DefaultInput, SubmitInput } from "./styles";

interface InputPropsInterface {
  type: string;
  placeholder: string;
}

export function Input({ type, placeholder }: InputPropsInterface) {
  if (type === "submit") {
    return <SubmitInput value={placeholder} type="submit" />;
  }

  return <DefaultInput placeholder={placeholder} type={type} />;
}
