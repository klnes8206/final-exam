function OnTriggerEnter(otherObj : Collider){
 if (otherObj.tag == "con"){ 
    Destroy(gameObject);
	ScoreCount.gscore -=1;
	}
}