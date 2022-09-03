import styled from "styled-components";
import { Card } from "./components/Card";
import { Input } from "./components/input";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type FormData = {
  email: String;
  password: String;
};

const schema = yup
  .object({
    email: yup.string().email().required("email cannot be empty"),
    password: yup.string().required("password cannot be empty"),
  })
  .required();

function App() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    align-items: center;
    justify-content: center;
  `;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <Container className="App">
      <form onSubmit={onSubmit}>
        <Card>
          <Input
            type="email"
            placeholder="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            type="password"
            placeholder="password"
            register={register}
            // error={errors.password?.message}
          />
          <Input type="submit" placeholder="submit" />
          <input type="submit" value="a" />
        </Card>
      </form>
    </Container>
  );
}

export default App;
