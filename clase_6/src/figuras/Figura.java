package figuras;

public abstract class Figura {

    protected double x;
    protected double y;
    protected boolean isDrawn;
    protected String color;

    public Figura() {}

    public Figura(double x, double y, boolean isDrawn, String color) {
        this.x = x;
        this.y = y;
        this.isDrawn = isDrawn;
        this.color = color;
    }

    public abstract void mover (double x, double y);
}
