public class MainExceptions {
    public static void main(String[] args) {
        try {
            dividirPorCero();
        } catch (ArithmeticException error) {
            System.out.println("Error al dividir por cero");
        } finally {
            System.out.println("Esto se va a ejecutar siempre");
        }

        System.out.println("Programa finalizado");
    }

    public static void dividirPorCero() throws ArithmeticException {
        double resultado = 60 / 0;
    }

}
