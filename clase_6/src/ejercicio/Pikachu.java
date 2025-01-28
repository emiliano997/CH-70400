package ejercicio;

public class Pikachu extends Pokemon implements IElectrico {
    public Pikachu(int pokedexNumber, String nickname, boolean isShiny, int level) {
        super(pokedexNumber, nickname, isShiny, level);
    }

    public Pikachu() {
    }

    @Override
    public void impactrueno() {
        System.out.println(this.nickname + " usó Impactrueno");
    }

    @Override
    public void paralizar() {
        System.out.println(this.nickname + " usó Paralizar");
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
