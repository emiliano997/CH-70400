package figuras;

public class Circulo extends Figura implements Dibujar, Pintar {
    public Circulo() {}

    public Circulo(double x, double y, boolean isDrawn, String color) {
        super(x, y, isDrawn, color);
    }

    @Override
    public void dibujar() {
        System.out.println("figuras.Circulo Dibujado");
    }

    @Override
    public void borrar() {
        System.out.println("figuras.Circulo Borrado");
    }

    @Override
    public void pintarBordes(String color) {
        System.out.println("Bordes Pintados de " + color);
    }

    @Override
    public void rellenar(String color) {
        System.out.println("Rellenado de " + color);
    }

    @Override
    public void mover(double x, double y) {
        this.x = x;
        this.y = y;
    }
}
