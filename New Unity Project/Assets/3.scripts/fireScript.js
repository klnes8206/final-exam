#pragma strict

var projectile : Rigidbody;//砲彈
var speed : float = 80;//砲彈的飛行速度

function Start () {

}

function Update () {
	//獲取Ctrl與滑鼠左鍵的按鍵
	//判斷是否按下按鍵
	if(Input.GetButtonDown("Fire1"))
	{
		//產生砲彈在發射點
		var shoot : Rigidbody = 
			Instantiate(projectile, transform.position, transform.rotation);
		//給砲彈方向力，將他從Z軸推出去
		shoot.velocity = transform.TransformDirection(Vector3( 0, 0, speed));
		//讓坦克的碰撞框忽略砲彈的碰撞框
		Physics.IgnoreCollision(transform.root.GetComponent.<Collider>(), shoot.GetComponent.<Collider>());
	}
}