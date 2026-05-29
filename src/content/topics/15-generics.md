---
id: 15
title: Generics
slug: 15-generics
---
## Concept
Generics allow classes, interfaces, and methods to work with different data types while keeping type safety.

In Java, a generic type parameter is written in angle brackets, such as T in Box<T>. The type parameter acts like a placeholder for the real type used later.

Generics are common in collections. For example, ArrayList<String> means the list should store String objects.

## Quiz
1. What is the purpose of generics?
- A) Reuse code with different types while keeping type safety
- B) Force every variable to be an int
- C) Remove all class names
- D) Stop methods from returning values
Answer: A
Explanation: Generics let code work with different types without losing compile-time type checks.

2. What does T usually represent in Box<T>?
- A) A type parameter
- B) A required class name
- C) A package folder
- D) A loop counter
Answer: A
Explanation: T is a placeholder for the actual type supplied later.

## Practice
Create a generic Pair class that stores two values of the same type.

```java
public class Pair<T> {
  private T first;
  private T second;

  public Pair(T first, T second) {
    this.first = first;
    this.second = second;
  }

  public T getFirst() {
    return first;
  }

  public T getSecond() {
    return second;
  }
}
```
