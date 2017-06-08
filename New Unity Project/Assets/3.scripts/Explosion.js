#pragma strict

var explosion : GameObject;//爆炸特效

function Start () {

}
//碰撞偵測
function OnCollisionEnter () {
	//碰撞後產生爆炸
	Instantiate (explosion, transform.position, transform.rotation);
	Destroy(gameObject);//刪除砲彈
}