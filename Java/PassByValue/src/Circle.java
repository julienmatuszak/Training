public class Circle {

	public static int x, y , radius;
	public void setOrigin(int x, int y, int radius) {
		Circle.x = x;
		Circle.y = y;
		Circle.radius = radius;
	}
	
	public int getX() {
		return x;
	}
	
	public int getY() {
		return y;
	}
	
	public void setX(int x) {
		Circle.x = x;
	}
	
	public void setY(int y) {
		Circle.y = y;
	}
	
}
