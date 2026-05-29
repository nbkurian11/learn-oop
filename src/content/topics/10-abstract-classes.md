---
id: 10
title: Abstract Classes
slug: 10-abstract-classes
---
## Concept
An abstract class cannot be instantiated directly. It is meant to be extended by more specific subclasses.

Abstract classes can contain regular methods and abstract methods. An abstract method has no body, so subclasses must provide the implementation.

Use an abstract class when related classes share common code but still need to define some behavior differently.

## Quiz
1. Can you create an object directly from an abstract class?
- A) No
- B) Yes, always
- C) Only if it has no fields
- D) Only inside a loop
Answer: A
Explanation: Abstract classes are incomplete base types and cannot be instantiated directly.

2. What must a concrete subclass do with inherited abstract methods?
- A) Implement them
- B) Ignore them
- C) Rename the Java file
- D) Make every field static
Answer: A
Explanation: A non-abstract subclass must implement inherited abstract methods.

## Practice
Create a Circle class that extends Shape and implements area.

```java
abstract class Shape {
  abstract double area();
}

public class Circle extends Shape {
  double radius;

  public Circle(double radius) {
    this.radius = radius;
  }

  @Override
  double area() {
    return Math.PI * radius * radius;
  }
}
```
