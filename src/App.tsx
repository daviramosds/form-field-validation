import styled from "styled-components";
import { Card } from "./components/Card";
import { Input } from "./components/input";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email().required("email cannot be empty"),
    password: yup.string().required("password cannot be empty"),
  })
  .required();

function App() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    align-items: center;
    justify-content: center;
  `;

  const DataContainer = styled.div`
    flex-direction: column;
    justify-content: space-between;

    margin-top: 20px;

    p {
      color: #555;
      font-size: 0.875rem;
    }

    label {
      color: #60a5fa;
      font-weight: 500;
      margin-right: 5px;
    }
  `;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setData({
      email: data.email,
      password: data.password,
    });
  });

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
            error={errors.password?.message}
          />
          <Input type="submit" placeholder="submit" />
        </Card>

        {data.email && (
          <DataContainer>
            <p>
              <label>email:</label>
              {data.email}
            </p>

            <p>
              <label>password:</label>
              {data.password}
            </p>
          </DataContainer>
        )}
      </form>
    </Container>
  );
}

export default App;
