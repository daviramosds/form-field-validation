import { PropsWithChildren } from "react";
import { Container } from "./styles";

export function Card({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}
