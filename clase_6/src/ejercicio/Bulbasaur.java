package ejercicio;

public class Bulbasaur extends Pokemon implements IPlanta {
    public Bulbasaur(int pokedexNumber, String nickname, boolean isShiny, int level) {
        super(pokedexNumber, nickname, isShiny, level);
    }

    public Bulbasaur() {
    }

    @Override
    public void latigoCepa() {
        System.out.println(this.nickname + " usó Latigo Cepa");
    }

    @Override
    public void hojaFilosa() {
        System.out.println(this.nickname + " usó Hoja Filosa");
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
