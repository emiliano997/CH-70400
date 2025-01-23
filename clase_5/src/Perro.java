import java.util.Objects;

public class Perro extends Animal {
    public String nickname;

    // Sobrecarga de metodos
    public Perro(String name, int age, String species, String nickname) {
        // Constructor de la clase padre
        super(name, age, species);

        // Constructor de la clase hija
        this.nickname = nickname;
    }

    public Perro(String nickname) {
        this.nickname = nickname;
    }

    public Perro(String name, int age, String species) {
        // Constructor de la clase padre
        super(name, age, species);
    }

    public Perro() {}

    public void play() {
        System.out.println("I'm playing");
    }

    // Sobreescribir
    @Override
    public void eat() {
        super.eat();
        System.out.println("I'm a dog");
    }


}