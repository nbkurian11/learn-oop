---
id: 3
title: Constructors and this
slug: 03-constructors-this
---
## Concept
A constructor is a special method-like block that runs when an object is created. It usually gives the object its starting field values.

The this keyword refers to the current object. It is often used when a constructor parameter has the same name as a field.

Constructors make object creation cleaner because the object can start in a valid state immediately.

## Quiz
1. When does a constructor run?
- A) When an object is created
- B) Only when a loop ends
- C) When a comment is written
- D) Before the Java file exists
Answer: A
Explanation: Java calls the constructor during object creation with new.

2. What does this usually refer to?
- A) The current object
- B) The parent folder
- C) The Java compiler
- D) The next object in memory
Answer: A
Explanation: this points to the object whose code is currently running.

## Practice
Complete the constructor so each Course object stores its code and name.

```java
public class Course {
  String code;
  String name;

  public Course(String code, String name) {
    this.code = code;
    this.name = name;
  }

  public static void main(String[] args) {
    Course course = new Course("CS101", "Intro to OOP");
    System.out.println(course.code + ": " + course.name);
  }
}
```
