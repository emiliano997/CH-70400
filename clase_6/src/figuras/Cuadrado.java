package figuras;

public class Cuadrado extends Figura implements Dibujar, Pintar {
    public Cuadrado(double x, double y, boolean isDrawn, String color) {
        super(x, y, isDrawn, color);
    }

    public Cuadrado(boolean isDrawn, String color) {}

    public Cuadrado() {}

    // Sobrecarga de métodos
    public void imprimir() {}

    @Override
    public void dibujar() {
        this.isDrawn = true;
        System.out.println("figuras.Cuadrado Dibujado");
    }

    @Override
    public void borrar() {
        this.isDrawn = false;
        System.out.println("figuras.Cuadrado Borrado");
    }

    @Override
    public void pintarBordes(String color) {
        this.color = color;
        System.out.println("Bordes Pintados de " + color);
    }

    @Override
    public void rellenar(String color) {
        this.color = color;
        System.out.println("figuras.Cuadrado Rellenado de " + color);
    }

    @Override
    public void mover(double x, double y) {
        this.x = x;
        this.y = y;
    }
}
