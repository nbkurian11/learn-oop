---
id: 12
title: Composition vs Inheritance
slug: 12-composition-inheritance
---
## Concept
Composition means building a class out of other objects. It models a has-a relationship, such as a Car has an Engine.

Inheritance models an is-a relationship, such as a Dog is an Animal.

Composition is often more flexible because parts can be swapped or changed without forcing a strict parent-child hierarchy.

## Quiz
1. Which relationship best describes composition?
- A) has-a
- B) is-a
- C) runs-a
- D) prints-a
Answer: A
Explanation: Composition means one object contains or uses another object.

2. Which relationship best describes inheritance?
- A) is-a
- B) has-a
- C) imports-a
- D) edits-a
Answer: A
Explanation: Inheritance should represent a child type being a specialized parent type.

## Practice
Use composition by giving a Computer a Processor object.

```java
class Processor {
  public void run() {
    System.out.println("Processing");
  }
}

public class Computer {
  private Processor processor;

  public Computer(Processor processor) {
    this.processor = processor;
  }

  public void start() {
    processor.run();
  }
}
```
