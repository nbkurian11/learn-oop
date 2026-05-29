---
id: 2
title: Fields, Methods, and Object State
slug: 02-fields-methods-state
---
## Concept
Fields store an object's data. They represent the object's state, such as a bank account balance, a student's grade, or a car's speed.

Methods define what an object can do. They can read fields, change fields, and perform actions using the object's current state.

State matters because two objects from the same class can hold different field values while sharing the same method definitions.

## Quiz
1. What does an object's state usually come from?
- A) Its fields
- B) Its comments
- C) Its package name
- D) Its file extension
Answer: A
Explanation: Fields hold the data that describes an object's current state.

2. What is the role of a method?
- A) To define behavior
- B) To rename the Java file
- C) To delete the class
- D) To replace the compiler
Answer: A
Explanation: Methods describe actions an object or class can perform.

## Practice
Add a deposit method that changes the account balance.

```java
public class BankAccount {
  double balance;

  public void deposit(double amount) {
    balance = balance + amount;
  }

  public static void main(String[] args) {
    BankAccount account = new BankAccount();
    account.deposit(25.00);
    System.out.println(account.balance);
  }
}
```
