import { Ticket } from "./ticket";
import { TicketsPriceCalculator } from "./ticketsPriceCalculator";

describe("TicketsPriceCalculator", () => {
  let calculator: TicketsPriceCalculator;

  beforeEach(() => {
    calculator = new TicketsPriceCalculator();
  });

  test("should return -1 if there are no tickets", () => {
    const tickets: Ticket[] = [];
    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).toBe(-1);
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

  test("should apply 10% discount if there are exactly 5 business class tickets", () => {
    const tickets = Array.from({ length: 5 }, () => ({
      price: 10,
      isBusinessClass: true,
    }));

    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).toBe(45); // 10% discount
  });

  test("should apply 25% discount if there are exactly 10 business class tickets", () => {
    const tickets = Array.from({ length: 10 }, () => ({
      price: 5,
      isBusinessClass: true,
    }));

    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).toBe(37.5); // 25% discount
  });

  test("should apply 15% discount if total price is exactly 1000", () => {
    const tickets: Ticket[] = [{ price: 1000, isBusinessClass: false }];
    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).toBe(850); // 15% discount
  });

  test("should apply 20% discount if total price is exactly 2000", () => {
    const tickets: Ticket[] = [{ price: 2000, isBusinessClass: false }];
    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).toBe(1600); // 20% discount
  });

  test("should apply 20% discount if total price is exactly 2000", () => {
    const tickets: Ticket[] = [{ price: 2000, isBusinessClass: false }];
    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).toBe(1600); // 20% discount
  });

  test("should apply 10% discount if total price is exactly 500", () => {
    const tickets: Ticket[] = [{ price: 500, isBusinessClass: false }];
    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).toBe(450); // 10% discount
  });

  test("should apply 10% discount if total price is exactly 200", () => {
    const tickets: Ticket[] = [{ price: 200, isBusinessClass: false }];
    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).toBe(180); // 10% discount
  });

  test("should apply 5% discount if there exactly 10 tickets", () => {
    const tickets = Array.from({ length: 10 }, () => ({
      price: 2,
      isBusinessClass: false,
    }));

    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).toBe(19); // 5% discount
  });

  test("should not apply 20% discount if total price is above 2000", () => {
    const tickets: Ticket[] = [{ price: 2001, isBusinessClass: false }];
    const totalPrice = calculator.calculateTotalTicketsPrice(tickets);
    expect(totalPrice).not.toBe(1600.8); // 20% discount should not be applied
  });
});
