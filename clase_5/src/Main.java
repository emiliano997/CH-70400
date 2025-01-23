import java.util.ArrayList;
import java.util.List;

public class Main {
//    public static void main(String[] args) {
//        Perro perro = new Perro();
//        perro.play();
//
//        Gato gato = new Gato();
//        gato.eat();
//
//        // Polimorfismo
//        Animal animal = new Gato();
//        animal.eat();
//
//        animal = new Perro();
//        animal.eat();
//
//        List<Animal> animals = new ArrayList<Animal>();
//        animals.add(gato);
//        animals.add(perro);
//        animals.add(animal);
//
//        for (Animal animalList : animals) {
//            animalList.eat();
//        }
//    }

    public static void main(String[] args) {
        Perro perro = new Perro();
        perro.setName("Firulais");
        perro.setAge(5);
        perro.setSpecies("Callejero");

        // Perro otroPerro = perro; // Asigno el espacio en memoria
        Perro otroPerro = new Perro();
        otroPerro.setName("Firulais");
        otroPerro.setAge(5);
        otroPerro.setSpecies("Callejero");

        System.out.println(perro.hashCode());
        System.out.println(otroPerro.hashCode());

        if (perro.equals(otroPerro)) {
            System.out.println("Los perros son iguales (equals)");
        } else {
            System.out.println("Los perros son diferentes (equals)");
            System.out.println(perro.equals(otroPerro));
        }

        if (perro == otroPerro) {
            System.out.println("Los perros son iguales");
        } else {
            System.out.println("Los perros son diferentes");
        }

        Perro minnie = new Perro("Minnie", 7, "Callejero", "Negra");
        minnie.eat();
    }
}