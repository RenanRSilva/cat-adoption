import { render, screen } from "@testing-library/react"
import Filter from '../Filter'
import userEvent from "@testing-library/user-event"



describe("Filter", () => {
  render(<Filter filters={{}} setFilter={() => { }} />)
  test("should be able to change value of favorite select", () => {
    const select = screen.getByLabelText("favorite")
    expect(select.value).toBe("any")
    userEvent.selectOptions(select, "favorite")
    expect(select.value).toBe("favorite")
    userEvent.selectOptions(select, "not favorite")
    expect(select.value).toBe("not favorite")

  })

  test("should be able to change value of gender select", () => {
    render(<Filter filters={{}} setFilter={() => { }} />)
    const select = screen.getByLabelText("gender")
    expect(select.value).toBe("any")
    userEvent.selectOptions(select, "male")
    expect(select.value).toBe("male")
    userEvent.selectOptions(select, "female")
    expect(select.value).toBe("female")
  })
})
