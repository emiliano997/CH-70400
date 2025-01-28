package ejercicio;

public abstract class Pokemon {

    protected int pokedexNumber;
    protected String nickname;
    protected boolean isShiny;
    protected int level;

    public Pokemon(int pokedexNumber, String nickname, boolean isShiny, int level) {
        this.pokedexNumber = pokedexNumber;
        this.nickname = nickname;
        this.isShiny = isShiny;
        this.level = level;
    }

    public Pokemon() {}

    public abstract void placaje();
    public abstract void grunido();

}