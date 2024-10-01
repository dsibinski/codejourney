import { Inventory } from "./inventory";

describe("Inventory", () => {
  let inventory: Inventory;

  beforeEach(() => {
    inventory = new Inventory();
  });

  test("should add items correctly", () => {
    inventory.addItem("apple", 10, 1.5);
    expect(inventory.checkStock("apple")).toBe(10);
    inventory.addItem("apple", 5, 1.5);
    expect(inventory.checkStock("apple")).toBe(15);
  });

  test("should remove items correctly", () => {
    inventory.addItem("banana", 20, 0.5);
    inventory.removeItem("banana", 5);
    expect(inventory.checkStock("banana")).toBe(15);
    inventory.removeItem("banana", 15);
    expect(inventory.checkStock("banana")).toBe(0);
    expect(() => inventory.removeItem("banana", 1)).toThrow(
      "Item not found in inventory"
    );
    inventory.addItem("banana", 10, 0.5);
    expect(() => inventory.removeItem("banana", 20)).toThrow(
      "Not enough stock to remove"
    );
  });

  test("should check stock correctly", () => {
    inventory.addItem("orange", 30, 0.8);
    expect(inventory.checkStock("orange")).toBe(30);
    expect(inventory.checkStock("apple")).toBe(0);
  });

  test("should calculate total value correctly", () => {
    inventory.addItem("apple", 10, 1.5);
    inventory.addItem("banana", 20, 0.5);
    expect(inventory.totalValue()).toBe(10 * 1.5 + 20 * 0.5);
  });

  test("should handle removing non-existent items", () => {
    expect(() => inventory.removeItem("nonexistent", 1)).toThrow(
      "Item not found in inventory"
    );
  });

  test("should handle adding and removing multiple items", () => {
    inventory.addItem("apple", 10, 1.5);
    inventory.addItem("banana", 20, 0.5);
    inventory.removeItem("apple", 5);
    inventory.removeItem("banana", 10);
    expect(inventory.checkStock("apple")).toBe(5);
    expect(inventory.checkStock("banana")).toBe(10);
    expect(inventory.totalValue()).toBe(5 * 1.5 + 10 * 0.5);
  });
});
