import { Ticket } from "./ticket";
import { TicketsPriceCalculator } from "./ticketsPriceCalculator";

describe("TicketsPriceCalculator", () => {
  let calculator: TicketsPriceCalculator;

  beforeEach(() => {
    calculator = new TicketsPriceCalculator();
  });

  test("should return 0 if there are no tickets", () => {
    const tickets: Ticket[] = [];
    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).toBe(0);
  });

  test("should apply 25% discount if total price is more than 2000", () => {
    const tickets: Ticket[] = [{ price: 2200, isBusinessClass: false }];
    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).toBe(1650); // 25% discount
  });

  test("should apply 20% discount if total price is between 1000 and 2000", () => {
    const tickets: Ticket[] = [{ price: 1500, isBusinessClass: false }];
    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).toBe(1200); // 20% discount
  });

  test("should apply 15% discount if total price is between 500 and 1000", () => {
    const tickets: Ticket[] = [{ price: 800, isBusinessClass: false }];
    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).toBe(680); // 15% discount
  });

  test("should apply 10% discount if total price is between 200 and 500", () => {
    const tickets: Ticket[] = [{ price: 300, isBusinessClass: false }];
    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).toBe(270); // 10% discount
  });

  test("should apply 5% discount if there are more then 10 tickets", () => {
    const tickets = Array.from({ length: 20 }, () => ({
      price: 1,
      isBusinessClass: false,
    }));

    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).toBe(19); // 5% discount
  });

  test("should apply 25% discount if there are more then 10 business class tickets", () => {
    const tickets = Array.from({ length: 20 }, () => ({
      price: 1,
      isBusinessClass: true,
    }));

    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).toBe(15); // 25% discount
  });

  test("should apply 10% discount if there are between 5 and 10 business class tickets", () => {
    const tickets = Array.from({ length: 8 }, () => ({
      price: 10,
      isBusinessClass: true,
    }));

    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).toBe(72); // 10% discount
  });
});
