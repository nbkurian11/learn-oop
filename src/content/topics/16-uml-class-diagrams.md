---
id: 16
title: UML Class Diagrams
slug: 16-uml-class-diagrams
---
## Concept
UML class diagrams are visual sketches of classes and their relationships.

A class box usually lists the class name, fields, and methods. Lines between boxes show relationships such as inheritance, composition, or association.

UML helps students plan OOP designs before writing code, especially when multiple classes interact.

## Quiz
1. What does a UML class diagram help you visualize?
- A) Classes and relationships
- B) Keyboard shortcuts only
- C) The Java installer
- D) Browser history
Answer: A
Explanation: UML diagrams show class structure and relationships.

2. What relationship does an inheritance arrow usually show?
- A) A child class extends a parent class
- B) A variable stores a number
- C) A loop repeats
- D) A file is deleted
Answer: A
Explanation: UML inheritance represents an extends relationship.

## Practice
Write Java classes that match a simple diagram: Course has many Student objects.

```java
import java.util.ArrayList;

class Student {
  String name;
}

public class Course {
  private ArrayList<Student> students = new ArrayList<>();

  public void addStudent(Student student) {
    students.add(student);
  }
}
```
