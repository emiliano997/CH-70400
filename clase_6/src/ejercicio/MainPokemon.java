package ejercicio;

public class MainPokemon {

    public static void main(String[] args) {
        Pikachu pika = new Pikachu(10, "Pika", false, 10);

        Charmander charm = new Charmander(1, "Charm", false, 5);

        Squirtle tortu = new Squirtle(7, "Tortu", true, 5);

        Bulbasaur florcita = new Bulbasaur(3, "Florcita", true, 5);

        pika.placaje();
        charm.placaje();

        tortu.pistolaAgua();
        florcita.latigoCepa();
    }
}
