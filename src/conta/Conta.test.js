import { render, screen } from "@testing-library/react";
import React from "react";
import Conta from "./Conta";

describe("Componente da conta", () => {
  it("Exibe o saldo da conta em valor monetário", () => {
    render(<Conta saldo={1000} />);

    const saldo = screen.getByTestId("saldo-conta");
    expect(saldo.textContent).toBe("R$ 1000");
  });
});
