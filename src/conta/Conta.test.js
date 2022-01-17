import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Conta from "./Conta";

describe("Componente da conta", () => {
  it("Exibe o saldo da conta em valor monetário", () => {
    render(<Conta saldo={1000} />);

    const saldo = screen.getByTestId("saldo-conta");
    expect(saldo.textContent).toBe("R$ 1000");
  });

  it("Chama função de realizar transação, quando o botão é clicado", () => {
    const funcaoRealizarTransacao = jest.fn();

    render(
      <Conta
        saldo={1000}
        realizarTransacao={() => {
          fireEvent.click(screen.getByText("Realizar operação"));
          expect(funcaoRealizarTransacao).toHaveBeenCalled();
        }}
      />
    );
  });
});
