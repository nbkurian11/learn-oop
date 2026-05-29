---
id: 8
title: Method Overriding
slug: 08-overriding
---
## Concept
Method overriding happens when a child class provides its own version of a method inherited from a parent class.

The method name, return type, and parameter list must match. The @Override annotation helps Java check that you are actually overriding a parent method.

Overriding lets related objects respond differently to the same method call.

## Quiz
1. What does method overriding allow a child class to do?
- A) Provide its own version of an inherited method
- B) Delete the parent class file
- C) Rename Java keywords
- D) Turn a field into a package
Answer: A
Explanation: Overriding customizes inherited behavior in a subclass.

2. Why use @Override?
- A) To ask the compiler to check the override
- B) To make a field private
- C) To create a new folder
- D) To stop all inheritance
Answer: A
Explanation: @Override helps catch mistakes in method signatures.

## Practice
Override the speak method for Cat.

```java
class Animal {
  public void speak() {
    System.out.println("Some sound");
  }
}

public class Cat extends Animal {
  @Override
  public void speak() {
    System.out.println("Meow");
  }
}
```
