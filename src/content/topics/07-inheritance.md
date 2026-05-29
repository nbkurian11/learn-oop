---
id: 7
title: Inheritance
slug: 07-inheritance
---
## Concept
Inheritance lets one class reuse and extend another class. The child class inherits accessible fields and methods from the parent class.

In Java, extends creates an inheritance relationship. For example, Dog can extend Animal if a dog is a specific kind of animal.

Inheritance is useful for shared behavior, but it should represent a true is-a relationship.

## Quiz
1. Which Java keyword creates a class inheritance relationship?
- A) extends
- B) repeat
- C) package
- D) print
Answer: A
Explanation: A child class uses extends to inherit from a parent class.

2. Which relationship best fits inheritance?
- A) A car is a vehicle
- B) A car has a tire
- C) A course has students
- D) A playlist has songs
Answer: A
Explanation: Inheritance should model an is-a relationship.

## Practice
Add a subclass that inherits from Animal and adds its own method.

```java
class Animal {
  public void eat() {
    System.out.println("Eating");
  }
}

public class Dog extends Animal {
  public void bark() {
    System.out.println("Woof");
  }

  public static void main(String[] args) {
    Dog dog = new Dog();
    dog.eat();
    dog.bark();
  }
}
```
