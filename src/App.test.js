import { render, screen } from "@testing-library/react";
import React from "react";
import App, { calcularNovoSaldo } from "./app";

describe("Componente principal", () => {
  describe("Quando abro o app do banco", () => {
    it("o nome é exibido", () => {
      render(<App />);
      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });
    it("o saldo é exibido", () => {
      render(<App />);
      expect(screen.getByText("Saldo")).toBeInTheDocument();
    });
    it("o botão realizar transação é exibido", () => {
      render(<App />);
      expect(screen.getByText("Realizar operação")).toBeInTheDocument();
    });
  });

  describe("Quando realizo uma transação", () => {
    it("que é um saque, o valor vai diminuir", () => {
      const valores = { transacao: "saque", valor: 50 };
      const saldo = 150;
      const novoSaldo = calcularNovoSaldo(valores, saldo);
      expect(novoSaldo).toBe(100);
    });
  });

  describe("Quando realizo uma transação", () => {
    it("que é um depósito, o valor vai aumentar", () => {
      const valores = { transacao: "deposito", valor: 50 };
      const saldo = 150;
      const novoSaldo = calcularNovoSaldo(valores, saldo);
      expect(novoSaldo).toBe(200);
    });
  });
});
