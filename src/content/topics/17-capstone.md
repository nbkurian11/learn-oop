---
id: 17
title: OOP Capstone Project
slug: 17-capstone
---
## Concept
A capstone project combines the major OOP concepts in one small program. The goal is to design several classes that work together.

A good beginner capstone has clear objects, encapsulated fields, constructors, methods, and at least one relationship such as composition or inheritance.

For this platform, a strong capstone is a simple course management system with Student, Course, Assignment, and Grade classes.

## Quiz
1. What is the main purpose of a capstone project?
- A) Combine multiple concepts in one program
- B) Avoid writing classes
- C) Only practice comments
- D) Remove object relationships
Answer: A
Explanation: A capstone asks you to use several skills together.

2. Which feature would show encapsulation in a capstone?
- A) Private fields with public methods that validate changes
- B) Every field being public
- C) No constructors anywhere
- D) One giant main method only
Answer: A
Explanation: Encapsulation protects object state and controls access.

## Practice
Start a course management project with Course and Student classes. Add methods to enroll students and print the roster.

```java
import java.util.ArrayList;

class Student {
  private String name;

  public Student(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }
}

public class Course {
  private String code;
  private ArrayList<Student> students = new ArrayList<>();

  public Course(String code) {
    this.code = code;
  }

  public void enroll(Student student) {
    students.add(student);
  }
}
```
