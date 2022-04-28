import { render, screen } from "@testing-library/react";
import Card from "../Card";
import userEvent from "@testing-library/user-event";

const cardProps = {
  name: "Sydney",
  phone: "111-111-1111",
  email: "laith@hotmail.com",
  image: {
    url: "https://media.istockphoto.com/photos/kitten-exploring-domestic-setting-picture-id1335433001?b=1&k=20&m=1335433001&s=170667a&w=0&h=9XToSFW4X8uO4QJKBdwFbKJjgxjXiaizLyULFrb4_Gc=",
    alt: "cute cat"
  },
  favoured: false
}


describe("Card", () => {
  test("should show name of cat", () => {
    render(<Card
      {...cardProps}
    />
    )
    expect(screen.getByRole("heading", {
      name: /sydney/i
    })).toBeInTheDocument()
  })

  test("should show phone number", () => {
    render(<Card
      {...cardProps}
    />
    )
    expect(screen.getByText(/111-111-111/i))
      .toBeInTheDocument()
  })

  test("should show email", () => {
    render(<Card
      {...cardProps}
    />
    )
    expect(screen.getByText(/laith@hotmail.com/i))
      .toBeInTheDocument()
  })

  test("should show image with correct src", () => {
    render(<Card
      {...cardProps}
    />
    )
    expect(screen.getByAltText(/cute cat/i).src)
      .toBe(cardProps.image.url)
  });

  test("should show outlined heart", () => {
    render(<Card
      {...cardProps}
    />)

    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  })

  test("should show filled heart", () => {
    render(<Card
      {...cardProps}

      favoured={true}
    />);

    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
  })

  test("should toggle heart status", () => {
    render(<Card {...cardProps} favoured={true} />);

    userEvent.click(screen.getByRole("button"))

    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();

    userEvent.click(screen.getByRole("button"))

    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
  })
});
