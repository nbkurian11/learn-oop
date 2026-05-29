---
id: 6
title: Object References and Memory Basics
slug: 06-references-memory
---
## Concept
In Java, object variables store references to objects. The variable does not hold the whole object directly; it points to where the object can be found.

If two variables refer to the same object, changing the object through one variable affects what the other variable sees.

Understanding references helps explain bugs where two names appear separate but are actually connected to the same object.

## Quiz
1. What does an object variable usually store in Java?
- A) A reference to an object
- B) The entire source file
- C) A compiler command
- D) A package folder
Answer: A
Explanation: Variables of object types hold references to objects.

2. If two variables reference the same object, what happens when one changes the object's field?
- A) The change is visible through the other variable
- B) Java creates a new class automatically
- C) The program cannot compile
- D) The field disappears
Answer: A
Explanation: Both variables point to the same object, so they observe the same state.

## Practice
Predict the output, then change the code to create two separate Profile objects.

```java
public class Profile {
  String displayName;

  public static void main(String[] args) {
    Profile first = new Profile();
    Profile second = first;

    first.displayName = "Nora";
    second.displayName = "Kai";

    System.out.println(first.displayName);
  }
}
```
