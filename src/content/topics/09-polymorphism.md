---
id: 9
title: Polymorphism
slug: 09-polymorphism
---
## Concept
Polymorphism means many forms. In OOP, it lets code use a parent type while the actual object can be one of many child types.

For example, an Animal variable can refer to a Dog or Cat object. When an overridden method is called, Java uses the actual object's version.

Polymorphism makes code flexible because it can work with a family of related objects without knowing every exact class.

## Quiz
1. What does polymorphism help code do?
- A) Work with different object types through a shared parent type
- B) Remove all classes
- C) Replace variables with comments
- D) Disable methods
Answer: A
Explanation: Polymorphism allows common code to work with different related objects.

2. Which method version runs with polymorphism?
- A) The actual object's overridden version
- B) Always the first method in the file
- C) Always the shortest method
- D) No method can run
Answer: A
Explanation: Java dispatches overridden instance methods based on the runtime object.

## Practice
Add another Animal subclass and call speak on both objects.

```java
class Animal {
  public void speak() {
    System.out.println("Some sound");
  }
}

class Dog extends Animal {
  @Override
  public void speak() {
    System.out.println("Woof");
  }
}

public class Demo {
  public static void main(String[] args) {
    Animal animal = new Dog();
    animal.speak();
  }
}
```
