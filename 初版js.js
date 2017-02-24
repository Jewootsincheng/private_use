function show(){
	if(document.getElementById("txt").value){
		var ca=document.getElementById("comment-area");
		var nd=document.createElement("div");

		var cachildlis=[];
		for(var i=0,l=ca.childNodes.length;i<l;i++){
			if(ca.childNodes[i].nodeName=="div")
				cachildlis.push(ca.childNodes[i]);
		}

		cachildlis.push(nd);
		nd.id="c"+(cachildlis.length);
		
		var nb=document.createElement("input");
		nb.type="button";
		nb.value="delete";

		nb.onclick=function(){
			var tobedel=document.getElementById(nb.parentNode.id);
			tobedel.parentNode.removeChild(tobedel);
		}

		nd.innerHTML="username:"+document.getElementById("txt").value;
		nd.appendChild(nb);
		ca.appendChild(nd);
	}
	else
		alert("nothing has been enter!");
}//尚未设置新增节点的样式