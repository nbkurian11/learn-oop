---
id: 4
title: Encapsulation and Access Modifiers
slug: 04-encapsulation
---
## Concept
Encapsulation means keeping an object's internal data protected and exposing controlled ways to use or change it.

In Java, fields are often marked private so outside code cannot change them directly. Public methods such as getters and setters provide controlled access.

This helps prevent invalid states. For example, a grade setter can reject values below 0 or above 100.

## Quiz
1. Why are fields often made private?
- A) To protect object state from uncontrolled changes
- B) To make the program run without a main method
- C) To remove all methods
- D) To prevent object creation
Answer: A
Explanation: Private fields support encapsulation by limiting direct access.

2. What is a getter usually used for?
- A) Reading a private field
- B) Deleting a class
- C) Importing Java
- D) Creating a package
Answer: A
Explanation: A getter returns a field value without exposing the field directly.

## Practice
Add validation so the grade can only be between 0 and 100.

```java
public class Assignment {
  private int grade;

  public void setGrade(int grade) {
    if (grade >= 0 && grade <= 100) {
      this.grade = grade;
    }
  }

  public int getGrade() {
    return grade;
  }
}
```
