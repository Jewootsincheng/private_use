function newDiv(txt){
	//新建一个div，内有文字和按键
	var nd=document.createElement("div");//need more styles
	var nb=document.createElement("input");//如果不用按键，就用个尺寸类同的div框框

	nb.type="button";//maybe "submit"
	nb.value="delete";
	nb.onclick=function(){
		if(confirm("你确定？")){
			nb.parentNode.parentNode.removeChild(nb.parentNode);
		}
	}
	
	nd.innerHTML=txt;
	nd.appendChild(nb);
	return nd;
}
function deliverWb(){
	//获取发表区和评论区节点，设id="txt"和"comment-area"
	var txt=document.getElementById("txt");
	if(txt.value){
		var ca=document.getElementById("comment-area");
		var newdiv=newDiv(txt.value);//为了装b可以写成一次性执行
		ca.appendChild(newdiv);
	}
	else{
		alert("pray enter sth!");
	}
}
//麻烦在于新的div