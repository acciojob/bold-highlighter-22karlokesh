function highlight() {
    //Write your code here
	const ele = document.getElementById("color");
	const boldWorld = ele.getElementsByTagName("strong");

	for(let i=0;i<boldWorld.length;i++){
		boldWorld[i].style.color="rgb(0, 128, 0)";
	}

}


function return_normal() {
    //Write your code here
	const ele = document.getElementById("color");
	const boldWorld = ele.getElementsByTagName("strong");

	for(let i=0;i<boldWorld.length;i++){
		boldWorld[i].style.color="rgb(0, 0, 0)";
	}
}
