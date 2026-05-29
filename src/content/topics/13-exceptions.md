---
id: 13
title: Exceptions in OOP Programs
slug: 13-exceptions
---
## Concept
Exceptions represent unexpected or invalid situations while a program runs. Java uses try, catch, and throw to handle them.

In OOP, methods can protect object rules by throwing exceptions when invalid data is passed in.

Good exception handling makes errors clearer and keeps objects from entering invalid states.

## Quiz
1. What does throw do?
- A) Creates and raises an exception
- B) Prints every field
- C) Creates a package
- D) Deletes a method
Answer: A
Explanation: throw is used to raise an exception in Java.

2. Why might a constructor throw an exception?
- A) To reject invalid starting values
- B) To rename the object
- C) To import a class
- D) To skip compilation
Answer: A
Explanation: Constructors can protect object state by rejecting invalid input.

## Practice
Throw an IllegalArgumentException when a negative price is used.

```java
public class Product {
  private double price;

  public Product(double price) {
    if (price < 0) {
      throw new IllegalArgumentException("Price cannot be negative");
    }
    this.price = price;
  }
}
```
