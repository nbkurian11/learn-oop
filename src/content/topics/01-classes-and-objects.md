---
id: 1
title: Classes and Objects
slug: 01-classes-and-objects
---
## Concept
A class is a blueprint that describes what an object should know and what it should be able to do. In Java, the class defines fields for data and methods for behavior. The class itself is not the object; it is the plan Java uses to create objects.

An object is a real instance created from a class. If Dog is the class, then myDog is one specific Dog object with its own name, age, and behavior. Another Dog object could have a different name and age while still using the same Dog class.

Classes help programmers organize code around the things in a problem. This is the foundation of object oriented programming.

A good way to think about this is that the class defines the category, while each object is one actual member of that category. In a student system, Student could be the class, while ava and noah could be two separate Student objects.

Fields describe state. Methods describe behavior. Together, fields and methods let an object represent something useful in a program.

## Common Mistakes
- Thinking the class and object are the same thing.
- Creating a class but never creating an object with new.
- Putting all code in main instead of giving objects their own fields and methods.
- Forgetting that each object has its own copy of instance fields.

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

3. In the class Student, what would student.name usually represent?
- A) A method
- B) A field that stores object state
- C) A package name
- D) A Java keyword
Answer: B
Explanation: A name value describes the state of a specific Student object.

4. Which line creates a new Student object?
- A) public class Student
- B) String name;
- C) Student student = new Student();
- D) public void introduce()
Answer: C
Explanation: The new keyword creates an object from a class.

## Practice
Create a Student class with a name field, a major field, and an introduce method that prints both values. Then create two Student objects in main and make each one introduce itself.

```java
public class Student {
  String name;
  String major;

  public void introduce() {
    System.out.println("Hi, my name is " + name + " and I study " + major);
  }

  public static void main(String[] args) {
    Student firstStudent = new Student();
    firstStudent.name = "Ava";
    firstStudent.major = "Computer Science";

    Student secondStudent = new Student();
    secondStudent.name = "Noah";
    secondStudent.major = "Software Engineering";

    firstStudent.introduce();
    secondStudent.introduce();
  }
}
```

## Hints
- Start by adding fields inside the class but outside any method.
- Use new Student() twice so you have two separate objects.
- Assign field values before calling introduce.
- If both print statements show the same name, check whether both variables point to the same object.

## Expected Output
```text
Hi, my name is Ava and I study Computer Science
Hi, my name is Noah and I study Software Engineering
```
