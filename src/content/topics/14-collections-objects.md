---
id: 14
title: Collections with Objects
slug: 14-collections-objects
---
## Concept
Collections store groups of values or objects. In Java, ArrayList is commonly used when you need a list that can grow.

OOP programs often use collections of objects, such as a list of Student objects in a Course.

When collections hold objects, you can loop through them and call methods on each object.

## Quiz
1. Why use an ArrayList instead of a fixed array?
- A) It can grow as items are added
- B) It removes all classes
- C) It cannot store objects
- D) It only works with integers
Answer: A
Explanation: ArrayList is a resizable list.

2. What can you do when looping through a list of Student objects?
- A) Call methods on each Student
- B) Only print the package name
- C) Delete Java syntax
- D) Avoid object creation forever
Answer: A
Explanation: Each item in the collection is an object reference.

## Practice
Add Student objects to a list and print each name.

```java
import java.util.ArrayList;

class Student {
  String name;

  Student(String name) {
    this.name = name;
  }
}

public class Roster {
  public static void main(String[] args) {
    ArrayList<Student> students = new ArrayList<>();
    students.add(new Student("Mia"));
    students.add(new Student("Noah"));

    for (Student student : students) {
      System.out.println(student.name);
    }
  }
}
```
