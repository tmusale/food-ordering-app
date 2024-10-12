import { act } from "react";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Cakes (9)");
  fireEvent.click(accordianHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(9);

  expect(screen.getByText("Cart - 0 items")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add" });
  expect(addBtns.length).toBe(9);
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - 1 items")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(10);

  fireEvent.click(screen.getByRole("button", { name: "Clear cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(9);

  expect(
    screen.getByText("Cart is empty. Add items to the cart")
  ).toBeInTheDocument();
});
