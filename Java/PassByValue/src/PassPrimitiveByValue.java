public class PassPrimitiveByValue extends Circle {

	public static void main(String[] args) {
		int x = 3;
		
		passMethod(x);
		System.out.println("x = " + x);
		//because any change must happen within the scope where the variables are declared

		x = passMethod2(x);
		System.out.println("x = " + x);
		//here the variable is changed within the scope
		
		Circle myCircle = new Circle();
		myCircle.setOrigin(0, 0, 1);
		x = myCircle.getX();
		System.out.println("x = " + x);
		//now we get the variable x set and got from Circle type
	
		moveCircle(myCircle, 1, 1);
		x = myCircle.getX();
		System.out.println("x = " + x);
		//we have moved the circle (we need to change the value of x again)
				
	}
	public static void passMethod(int p) {
		p = 10;
	}
	public static int passMethod2(int q) {
		q = 10;
		return q;
	}
	
	public static void moveCircle(Circle circle, int deltaX, int deltaY) {
		circle.setX(circle.getX() + deltaX);
		circle.setY(circle.getY() + deltaY);
		
		circle = new Circle();//the object pointed to by circle has changedm but when the method return, myCircle still references the same object as before the method was called and will return 1
	}
	

}
