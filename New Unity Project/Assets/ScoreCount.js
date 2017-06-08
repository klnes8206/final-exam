 static var  gscore : int = 6;

  
 function OnGUI(){
    
	
	
	var myStyle : GUIStyle = new GUIStyle();
    myStyle.fontSize = 50;
	 myStyle.normal.textColor = Color.red;
   GUI.Label (Rect (10, 10 , 150, 20), ("Enemies : "+ gscore), myStyle);

   if(gscore==0){
   GUI.Label (Rect (10 , 80 , 150, 20), ("You win"), myStyle);
   }
 }