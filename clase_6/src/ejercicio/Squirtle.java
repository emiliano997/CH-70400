package ejercicio;

public class Squirtle extends Pokemon implements IAgua {
    public Squirtle(int pokedexNumber, String nickname, boolean isShiny, int level) {
        super(pokedexNumber, nickname, isShiny, level);
    }

    public Squirtle() {
    }

    @Override
    public void pistolaAgua() {
        System.out.println(this.nickname + " usó Pistola agua");
    }

    @Override
    public void surf() {
        System.out.println(this.nickname + " usó Surf");
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
