package ejercicio;

public class Charmander extends Pokemon implements IFuego {
    public Charmander(int pokedexNumber, String nickname, boolean isShiny, int level) {
        super(pokedexNumber, nickname, isShiny, level);
    }

    public Charmander() {
    }

    @Override
    public void ascuas() {
        System.out.println(this.nickname + "usó Ascuas");
    }

    @Override
    public void ruedaFuego() {
        System.out.println(this.nickname + " usó Rueda Fuego");
    }

    @Override
    public void placaje() {
        System.out.println(this.nickname + " usó Placaje");
    }

    @Override
    public void grunido() {
        System.out.println(this.nickname + " usó Gruñido");
    }
}
