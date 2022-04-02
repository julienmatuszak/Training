public class MountainBike extends Bicycle {
	//the extends gives access to public variables and methods
	public int seatHeight;
	
	public MountainBike(int startHeight, int startCadence,
			int startSpeed, int startGear) {
		super(startCadence, startSpeed, startGear);//but we need to add super to call the methods, variables and properties of the parent method
		seatHeight = startHeight;// this is a new variable in the constructor of the subclass
	}
	
	public void setHeight(int newValue) {
		seatHeight = newValue;
	}//as we have a new variable, we need to add a setter method to it

}
