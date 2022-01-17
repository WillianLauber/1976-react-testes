import React from "react";
import { render } from "@testing-library/react";
import Transacao from "./Transacao";

describe("Componente de transacao do extrato", () => {
  it("O snapshot do componente sempre deve permanecer o mesmo", () => {
    const { container } = render(
      <Transacao data="17/01/2022" tipo="saque" valor="28.00" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
