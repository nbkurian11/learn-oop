---
id: 5
title: Static vs Instance Members
slug: 05-static-instance
---
## Concept
Instance fields and methods belong to individual objects. Each object can have different values for its instance fields.

Static fields and methods belong to the class itself. They are shared across all objects of that class.

Use instance members for object-specific data, and static members for shared data or utility behavior that does not depend on one object's state.

## Quiz
1. Which member is shared by the class rather than one object?
- A) static member
- B) private field
- C) constructor parameter
- D) local variable
Answer: A
Explanation: Static members belong to the class and are shared across instances.

2. Which member should store a student's individual name?
- A) instance field
- B) static field
- C) package statement
- D) import statement
Answer: A
Explanation: Each student object should have its own name, so the field should be an instance field.

## Practice
Track how many User objects have been created.

```java
public class User {
  static int userCount = 0;
  String username;

  public User(String username) {
    this.username = username;
    userCount++;
  }

  public static void main(String[] args) {
    new User("sam");
    new User("lee");
    System.out.println(User.userCount);
  }
}
```
