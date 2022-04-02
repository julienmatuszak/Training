import java.util.Scanner;

public class sdz1 {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println("CONVERTISSEUR DEGRÉS CELSIUS ET DEGRÉS FAHRENHEIT");
		System.out.println("-------------------------------------------------");

		Scanner sc = new Scanner(System.in);
		
		double aconvertir, convertie;
		char choix = ' ', choix2 = ' ';

		do{
			do{
				System.out.println("Choisissez le mode de conversion : ");
				System.out.println("1 - Convertisseur Celsius - Fahrenheit");
				System.out.println("2 - Convertisseur Fahrenheit - Celsius");
				choix = sc.nextLine().charAt(0);
				
				if(choix != '1' && choix != '2')
					System.out.println("Choix non valide, veuillez le réitérer.");
			}while(choix != '1' && choix != '2');
			
			System.out.println("Température à convertir :");
			aconvertir = sc.nextDouble();
			sc.nextLine();
			
			if (choix == '1')
			{
				convertie = (9.0/5.0*aconvertir + 32.0);
				System.out.println(aconvertir + "°C correspondent à : " + arrondi(convertie,1) + " °F.");
			}
			
			else
			{
				convertie = (aconvertir - 32)*5.0/9.0;
				System.out.println(aconvertir + "°F correspondent à : " + arrondi(convertie,1) + " °C.");
			}
			
			do{
				System.out.println("Voulez-vous chercher une nouvelle température ? (O/N)");
				choix2 = sc.nextLine().charAt(0);
			}while (choix2 != 'O' && choix2 != 'N');
			
		}while(choix2 == 'O');
		
		System.out.println("Au revoir!");
	}
	public static double arrondi(double A, int B) {
		return (double) ( (int) (A * Math.pow(10, B) + .5)) / Math.pow(10, B);	
	}
}
