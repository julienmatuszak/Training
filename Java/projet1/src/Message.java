public class Message
{

	public void message(String recette, String... arguments)
	{
	  System.out.print("Ingrédients : \n");
	  for (String s : arguments)
	    System.out.println(s);
	}

	public static void main (String[] args)
	{
	  Message menu = new Message();
	  menu.message("déjeuner","ail","oignon","échalote");
	}
}
