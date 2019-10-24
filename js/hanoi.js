var step=0;
var start="div_d1";//From
var pass=3;
var des=document.getElementById("result");
var desHtml=des.innerHTML;
var div=document.getElementById("div_d1");
for(i=0;i<3;i++){
	var html = "<div id='disk"+(3-i)+"' draggable='true' ondragstart='onDragStart1(event)'> "+(3-i)+" </div>";
    div.innerHTML=div.innerHTML+html;
}
var ss=document.getElementById("ss");
ss.value="3";
document.getElementById("div_d1").parentNode.style.backgroundColor="#ffffdd";

function start1(){
	var result=document.getElementById("result");
	result.innerHTML="";
	var ss=document.getElementById("ss");
	var level=ss.value;
	for(i=1;i<=3;i++){
		var id="div_d"+i;
		var div=document.getElementById(id);
		var divs=div.getElementsByTagName("div");
		var len=divs.length;
		if(len>0){
			for(j=0;j<len;j++){
				div.removeChild(divs[0]);
			}
		}
	}
	div=document.getElementById("div_d1");
	for(i=0;i<level;i++){
		var html = "<div id='disk"+(level-i)+"' draggable='true' ondragstart='onDragStart1(event)'> "+(level-i)+" </div>";
	    div.innerHTML=div.innerHTML+html;
	}			
	pass=level;
	for(i=0;i<3;i++){
		document.getElementById("div_d"+(i+1)).parentNode.style.backgroundColor="#ffffff";
	}
	document.getElementById("div_d1").parentNode.style.backgroundColor="#ffffdd";
	des.innerHTML=desHtml;
	start="div_d1";
}
function onDragOver1(e){
	e.preventDefault();
}
function onDragStart1(e){
	var div=document.getElementById(e.target.id);
	var divs=div.parentNode.getElementsByTagName("div");
	//alert(divs.length);
	var span1 = div.parentNode.getElementsByTagName("span")[1];
	if(divs[divs.length-1]==div){
		e.dataTransfer.setData("Text",e.target.id);
		disk=document.getElementById(e.target.id);
	}	

}
function onDrop1(e){
	step+=1;
	e.preventDefault();
	//alert(pass);
	var id1=e.dataTransfer.getData("Text");				
	var disk=document.getElementById(id1);
	var div=document.getElementById(e.target.id);
	var divs=div.getElementsByTagName("div");
	if(id1==null){
		return false;
	}
	if(divs.length>0){
		//alert(pass+start);
		if(divs[divs.length-1].innerHTML>disk.innerHTML){
			
			if(div.innerHTML.length>0){
				
				e.currentTarget.appendChild(disk);
				divs=div.getElementsByTagName("div");
				if(divs.length==pass&&e.target.id!=start){
					alert("恭喜過關!! 共用了 "+step+" 步.");
					step=0;
					start=e.target.id;
					for(i=0;i<3;i++){
						document.getElementById("div_d"+(i+1)).parentNode.style.backgroundColor="#ffffff";
					}
					document.getElementById(start).parentNode.style.backgroundColor="#ffffdd";
				}
			}
		}else{
			alert("大盤不能在小盤上!!");
		}
	}else{
		if(div.innerHTML.length!=0){
			//e.preventDefault();
			e.currentTarget.appendChild(disk);
		}
		if(divs.length==pass&&e.target.id!=start){
			alert("恭喜過關!! 共用了 "+step+" 步.");
			step=0;
			start=e.target.id;
			for(i=0;i<3;i++){
				document.getElementById("div_d"+(i+1)).parentNode.style.backgroundColor="#ffffff";
			}
			document.getElementById(start).parentNode.style.backgroundColor="#ffffdd";
		}
	};
}
function getresult(){
	
	var result=document.getElementById("result");
	result.innerHTML="";				
	ans1(pass,"A","B","C");
	count=1;
}
var count=1;
function ans1(n,a,b,c){
	if(n==1){
		result.innerHTML+="step"+(count++)+". 盤 "+n+" 從 "+a+" 到 "+c+".<br>";
	}else{
		ans1(n-1,a,c,b);
		result.innerHTML+="step"+(count++)+". 盤 "+n+" 從 "+a+" 到 "+c+".<br>";
		ans1(n-1,b,a,c);
	}
}

function ans2(n,a,b,c){
	var disk=document.getElementById("disk"+n);
	if(n==1){
		movedisk(a,c,disk,count++);
	}else{
		ans2(n-1,a,c,b);
		movedisk(a,c,disk,count++);
		ans2(n-1,b,a,c);
	}
}
function autoplay(){
	//step+=1;
	start1();

	var from=document.getElementById("div_d1");
	var temp=document.getElementById("div_d2");
	var to=document.getElementById("div_d3");
	count=0;
	setTimeout(function(){
		ans2(pass,from,temp,to);
		setTimeout(function(){
			alert("恭喜過關!! 共用了 "+count+" 步.");
			step=0;
			start="div_d3";
			for(i=0;i<3;i++){
				document.getElementById("div_d"+(i+1)).parentNode.style.backgroundColor="#ffffff";
			}
			document.getElementById(start).parentNode.style.backgroundColor="#ffffdd";
		},1000*count+300);
	},1000);
}
function movedisk(from,to,disk,i){
	setTimeout(function(){from.removeChild(disk);},1000*i);
	setTimeout(function(){to.appendChild(disk);},1000*i+500);
}
