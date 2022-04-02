
public class Main {
	
	public static void method() {
		x = 0;
		System.out.println(x);
	}
	
	public static void main(String[] args) {
		method();//x cannot be resolved to a variable (because it is a local variable 
		//String name 1; //syntax error
		//int a;
		//System.out.println(a); //exception unresolved compilation problem
	}
}
