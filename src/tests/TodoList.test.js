import { render, screen } from "@testing-library/react"
import  userEvent  from "@testing-library/user-event"
import TodoList from "../components/TodoList"

describe("Testando componente TodoList.js", () => {
    test("deve renderizar com o titulo", () => {
        render(<TodoList/>)

        // screen.debug()   
        // const titulo = screen.getByText("Todo List")
        const titulo = screen.getByText(/todo list/i)

        expect(titulo).toBeInTheDocument()
    })

    test("deve atualizar o valor do input ao digitar nele", async () => {
        render(<TodoList/>)

        // screen.logTestingPlaygroundURL()
        const input = screen.getByPlaceholderText("Enter a todo")

        const user = userEvent.setup()
        await user.type(input, "Almoçar")
        // screen.logTestingPlaygroundURL()

        expect(input).toHaveValue("Almoçar")
    })
    test("deve renderizar uma nova tarefa ao digitar no input e pressionar a tecla ENTER", async () => {
        render(<TodoList/>)

        const input = screen.getByPlaceholderText(/enter a todo/i)
        
        
        const user = userEvent.setup()
        await user.type(input, "Almoçar{enter}")
        const span = screen.getByText("Almoçar")
        // screen.debug()
        expect(span).toBeInTheDocument()
        
    })

    test("deve alterar o satus da tarefa quando o botão de alterar status for clicado", async () => {
        render(<TodoList/>)

        const input = screen.getByPlaceholderText(/enter a todo/i)
        
        
        const user = userEvent.setup()
        await user.type(input, "Almoçar{enter}")
        const span = screen.getByText("Almoçar")
        const button = screen.getByText("Toggle")
        await user.click(button)
        // screen.debug()
        expect(span).toBeInTheDocument()
        expect(input).toHaveValue("")
        expect(span).toHaveStyle("text-decoration: line-through")
        await user.click(button)
        expect(span).toHaveStyle("text-decoration: none")

    })

    test("deve remover a tarefa quando clicado", async () => {
        render(<TodoList/>)

        const user = userEvent.setup()
        const input = screen.getByPlaceholderText(/enter a todo/i)
        await user.type(input, "Almoçar{enter}")
        const span = screen.getByText("Almoçar")

        expect(span).toBeInTheDocument()
        expect(input).toHaveValue("")
        const button = screen.getByText("Delete")
        await user.click(button)
        // expect(span).toBeInTheDocument()
        // expect(span).toHaveValue("")
        screen.logTestingPlaygroundURL()



    })
})