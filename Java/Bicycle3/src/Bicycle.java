public class Bicycle {
	
	private int cadence;
	private int gear;
	private int speed;
	
	private int id;
	
	private static int numberOfBicycles = 0;//class variable, not a member
	
	public Bicycle(int startCadence, int startSpeed, int startGear) {
		gear = startGear;
		cadence = startCadence;
		speed = startSpeed;
		
		id = ++numberOfBicycles;
	}
	
	public int getId() {
		return id;
	}
	
	public static int getNumberOfBicycles() {
		return numberOfBicycles;
	}
	
	public int getCadence() {
		return cadence;//this is the getter for the variable cadence
	}
	
	public void setCadence(int newValue) {
		cadence = newValue;
	}
	
	public int getGear() {
		return gear;
	}
	
	public void setGear(int newValue) {
		gear += newValue;
	}
	
	public int getSpeed() {
		return speed;
	}
	
	public void applyBrake(int decrement) {
		speed -= decrement;
	}
	
	public void speedUp(int increment) {
		speed += increment;
	}

}
