public class Bicycle {
	
	public int cadence;
	public int gear;
	public int speed;
	
	public Bicycle(int startCadence, int startSpeed, int startGear) {
		gear = startGear;
		cadence = startCadence;
		speed = startSpeed;
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
