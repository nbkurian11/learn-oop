---
id: 1
title: Classes and Objects
slug: 01-classes-and-objects
---
## Concept
A class is a blueprint that describes what an object should know and what it should be able to do. In Java, the class defines fields for data and methods for behavior.

An object is a real instance created from a class. If Dog is the class, then myDog is one specific Dog object with its own name, age, and behavior.

Classes help programmers organize code around the things in a problem. This is the foundation of object oriented programming.

## Quiz
1. What is the best description of a class?
- A) A loop that repeats code
- B) A blueprint for creating objects
- C) A specific value stored in memory
- D) A command that prints output
Answer: B
Explanation: A class defines the structure and behavior that objects created from it can have.

2. What is an object?
- A) An instance of a class
- B) A package in Java
- C) A comment in source code
- D) A type of compiler error
Answer: A
Explanation: An object is a specific instance made from a class.

## Practice
Create a Student class with a name field and an introduce method that prints the student's name.

```java
public class Student {
  String name;

  public void introduce() {
    System.out.println("Hi, my name is " + name);
  }

  public static void main(String[] args) {
    Student student = new Student();
    student.name = "Ava";
    student.introduce();
  }
}
```
