import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

describe("Counter", () => {
  test("deve aumentar o valor do contador em 3 quando o botão de incremento for clicado 3 vezes", async () => {
    render(<Counter />)

    const user = userEvent.setup();
    const button = screen.getByText("+");
    await user.click(button);
    await user.click(button);
    await user.click(button);

    const value = screen.getByText("3");

    expect(value).toBeInTheDocument();
    screen.logTestingPlaygroundURL()

  });
});
