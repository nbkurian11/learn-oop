const lessons = {
  1: {
    title: "Classes and Objects",
    content: "A class is a blueprint for creating objects. An object is an instance of a class.",
    code: `public class Dog {
  String name;
  int age;

  public static void main(String[] args) {
    // Creating an object from the Dog class
    Dog myDog = new Dog();
    myDog.name = "Rex";
    myDog.age = 3;
    System.out.println(myDog.name); // prints Rex
  }
}`
  }
}

export default lessons