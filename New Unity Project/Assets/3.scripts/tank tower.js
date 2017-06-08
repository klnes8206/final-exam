#pragma strict

var mSpeed : float = 1;
var rSpeed : float = 1;

var tower : Transform;//砲塔
var towerSpeed : float = 1;//砲塔旋轉速度

var barrel : Transform;//砲管基座
var barrelSpeed : float = 1;//砲管基座仰角變換速度
var maxAngle : float = 25;//仰角上限值
var minAngle : float = -5;//仰角下限值
private var angle : float;//紀錄仰角的角度

function Start () {

}

function Update () {
	var h = Input.GetAxis("Horizontal");
	var v = Input.GetAxis("Vertical");
		
	var x = Input.GetAxis ("Mouse X");//獲取滑鼠水平移動的軸向
	tower.Rotate(0,0,towerSpeed * x);//根據滑鼠水平移動的軸向來旋轉砲塔
			
	angle += Input.GetAxis ("Mouse ScrollWheel") * barrelSpeed;//獲取滑鼠滾輪軸向
	angle = Mathf.Clamp(angle, minAngle, maxAngle);//限制仰角的角度在範圍內
	barrel.localEulerAngles.x = angle;//根據仰角角度來改變砲管基座的X軸
	
	transform.Translate(0,0,mSpeed * -v);
	transform.Rotate(0,rSpeed * h,0);
}

