#pragma strict

var mSpeed : float = 1;
var rSpeed : float = 1;

var tower : Transform;
var towerSpeed : float = 1;

var barrel : Transform;
var barrelSpeed : float = 1;
var maxAngle : float = 25;
var minAngle : float = -5;
private var angle : float;

var trackL : Transform;//左履帶
var trackR : Transform;//右履帶
var trackSpeed : float = 0.02;//履帶轉動速度

function Start () {

}

function Update () {
	var h = Input.GetAxis("Horizontal");
	var v = Input.GetAxis("Vertical");
		
	var x = Input.GetAxis ("Mouse X");
	tower.Rotate(0,0,towerSpeed * x);
			
	angle += Input.GetAxis ("Mouse ScrollWheel") * barrelSpeed;
	angle = Mathf.Clamp(angle, minAngle, maxAngle);
	barrel.localEulerAngles.x = angle;
	
	transform.Translate(0,0,mSpeed * -v);
	transform.Rotate(0,rSpeed * h,0);
	
	//根據垂直軸向按鍵來決定執行:前或後的程式
	//:前，依據垂直軸向按鍵來決定履帶是向前或向後轉動
	//:後，依據水平軸向按鍵來決定左右履帶的轉動方向
	trackL.GetComponent.<Renderer>().material.mainTextureOffset.x += v ? trackSpeed * v : trackSpeed * h;
	trackR.GetComponent.<Renderer>().material.mainTextureOffset.x += v ? trackSpeed * v : trackSpeed * -h;
}

