import { Ticket } from "./ticket";

export class TicketsPriceCalculator {
  calculateTotalTicketsPrice(tickets: Ticket[]): number {
    if (tickets.length === 0) {
      return 0;
    }

    let totalPrice = tickets.reduce((sum, ticket) => sum + ticket.price, 0);
    const businessClassTickets = tickets.filter(
      (ticket) => ticket.isBusinessClass
    ).length;

    let totalDiscountToApply = 0;

    // Apply discounts based on total price
    if (totalPrice > 2000) {
      totalDiscountToApply += 0.25;
    } else if (totalPrice > 1000 && totalPrice <= 2000) {
      totalDiscountToApply += 0.2;
    } else if (totalPrice > 500 && totalPrice <= 1000) {
      totalDiscountToApply += 0.15;
    } else if (totalPrice >= 200 && totalPrice <= 500) {
      totalDiscountToApply += 0.1;
    }

    // Apply additional discount based on number of tickets
    if (tickets.length >= 10) {
      totalDiscountToApply += 0.05;
    }

    // Apply business class discounts
    if (businessClassTickets >= 10) {
      totalDiscountToApply += 0.2;
    } else if (businessClassTickets >= 5) {
      totalDiscountToApply += 0.1;
    }

    return totalPrice * (1 - totalDiscountToApply);
  }
}
