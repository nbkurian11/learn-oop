---
id: 11
title: Interfaces
slug: 11-interfaces
---
## Concept
An interface defines a contract: a set of methods a class promises to provide.

Classes use implements to follow an interface. A class can implement multiple interfaces, which makes interfaces useful for shared capabilities.

Interfaces focus on what an object can do rather than what it is in an inheritance hierarchy.

## Quiz
1. Which keyword does a class use to follow an interface?
- A) implements
- B) extendsOnly
- C) package
- D) return
Answer: A
Explanation: Java classes use implements to satisfy an interface.

2. What does an interface mainly define?
- A) A contract of behavior
- B) A fixed object state
- C) A compiler installation
- D) A local variable only
Answer: A
Explanation: Interfaces describe methods that implementing classes must provide.

## Practice
Make a class that implements the Payable interface.

```java
interface Payable {
  double calculatePay();
}

public class Tutor implements Payable {
  private double hours;
  private double rate;

  public Tutor(double hours, double rate) {
    this.hours = hours;
    this.rate = rate;
  }

  @Override
  public double calculatePay() {
    return hours * rate;
  }
}
```
