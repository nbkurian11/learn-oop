const lessons = {
  1: {
    title: "Classes and Objects",
    content: "A class is a blueprint for creating objects. An object is an instance of a class. For example, there exists an object such as Dog. A dog can have attributes such as age, breed, name. If we were to create a class for it we would have to include all of its attributes as variables. We could also include different behaviours such as barking and eating. These behaviours can be represented as methods",
    code: `public class Dog {
  String name;
  int age;

  public void bark() {
  System.out.println("Woof!");
    }


  public static void main(String[] args) {
    // Creating an object from the Dog class
    Dog myDog = new Dog();
    myDog.name = "Rex";
    myDog.age = 3;
    System.out.println(myDog.name); // prints Rex
    myDog.bark(); // prints Woof!

  }
}`
  },
  2:{
    title: "Constructors and 'this' keyword",
    content: "",
    code: ``

  }
}

export default lessons