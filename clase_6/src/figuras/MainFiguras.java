package figuras;

public class MainFiguras {

    public static void main(String[] args) {

        Cuadrado cuadrado = new Cuadrado(20, 20, false, "rojo");
        Circulo circulo = new Circulo(15, 15, false, "rojo");

        cuadrado.dibujar();
        cuadrado.pintarBordes("rojo");
        cuadrado.rellenar("azul");

        circulo.dibujar();
        circulo.pintarBordes("rojo");
        circulo.rellenar("azul");

    }
}
