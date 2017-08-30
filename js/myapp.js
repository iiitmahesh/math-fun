var a,x,y,z,get,canswer,uans;
var qlimit=10,qcount=0,ccount=0,wcount=0,scount=0;
var b,p,q,c,m,n,ol,qus,qq,first,oth,id,id1;
var total_time=100,ittime;
var timeout;
$.get('index.js');
function home(){
	$('#home').hide();
	}
	function timestatus(itime)
	{
		itime=parseInt(itime);
		ittime=parseInt(itime);
		$(".subt").show();
		$("#timer").show().html(itime+"<span style='font-size:30px;'> sec<span>");
		var aa=100/total_time;
		var bb=(0.8)*total_time;
		bb=Math.round(bb);
		var wd=itime*aa;
		$("#timestatus").css("background","linear-gradient(center top , #90ff90, #19c72e) repeat-x scroll 0% 0% transparent");
		$("#timestatus").css("background","-moz-linear-gradient(center top , #90ff90, #19c72e) repeat-x scroll 0% 0% transparent");
		$("#timestatus").css("background","-webkit-linear-gradient(center top , #90ff90 20%, #19c72e 100%) repeat-x scroll 0% 0% transparent");
		$("#timestatus").css("background","-ms-linear-gradient(center top , #90ff90 20%, #19c72e 100%) repeat-x scroll 0% 0% transparent");
		$("#timestatus").css("background","-o-linear-gradient(center top , #90ff90, #19c72e) repeat-x scroll 0% 0% transparent");
		if(wd>bb)
		{
			$("#timestatus").css("background","linear-gradient(center top , #f1e980, #c7ac00) repeat-x scroll 0% 0% transparent");
			$("#timestatus").css("background","-moz-linear-gradient(center top , #f1e980, #c7ac00) repeat-x scroll 0% 0% transparent");			
			$("#timestatus").css("background","-webkit-linear-gradient(center top , #f1e980 20%, #c7ac00 100%) repeat-x scroll 0% 0% transparent");
			$("#timestatus").css("background","-ms-linear-gradient(center top , #f1e980 20%, #c7ac00 100%) repeat-x scroll 0% 0% transparent");
			$("#timestatus").css("background","-o-linear-gradient(center top , #f1e980, #c7ac00) repeat-x scroll 0% 0% transparent");
		}
		else
		{
			//do nothing
		}
		$("#timestatus").animate({width: wd+"%"});
	}
function inicount()
{
	var time=0;
	$("#time").text(time);
	counter();
}
function cancel_q()
{
	clearTimeout(timeout);
	$("#tstatus").hide();
	$(".showtext").hide();
	$("#question_body").hide();
	$("#box_wrapper").fadeIn();
}
function counter()
{	
	$("#ans_input").mouseover(function()
	{
		$(this).css("border-color","#00a2e8");
		$(this).css("border-radius","2px");
		$(this).focus();
	});
	$("#ans_input").mouseout(function()
	{
		$(this).css("border","");
	});
	clearTimeout(timeout);
	time=$("#time").text();
	itime=parseInt(time);
	if(itime!=total_time)
	{
		itime=itime+1;
		$("#time").html(itime);
		timestatus(itime);
		timeout=setTimeout('counter()',1000);
	}
	else
	{
		//alert('Time up');
		//$("#timestatus").css("background","#444444");
		//$('#qbody').html(qcount+' Questions completed.');
		$("#timer").hide();
		$(".subt").hide();
		$('#qbody').hide();
		$('#tstatus').hide();
		$("#cq").html(qcount);
		$("#ra").html(ccount);
		$("#wa").html(wcount);
		$("#sq").html(scount);
		$("#action_buttons").hide();
		$('#ans_input').hide();
		$('.Subm').hide();
		$('#ans_body').hide();
		$('#time').hide();
		$('#start_again').show();
		result="<table><tr><td><img src='img/congrats.png'></td><td><span id='congts'>Congratulations !!</span><br><span style='font-size: 20px;font-weight:bold;'>Collect more coins to unlock challenges...</span></td></tr></table><br>";
		result+="<table align='center'><tr><td><img src='img/coinz.png'></td><td align='center' style='font-size: 30px;font-weight:bold;'>Total coins<br>earned<br>= <img style='vertical-align:bottom;' src='img/rupee.png'><span style='font-size:46px;'> "+ccount*25+"</span></td></tr></table>";
		if($.cookie("MVAuth")==null)
		{
			$("#hintz").show().html("You need to create an account to save your progress.<a onclick='signin()'>Singin<a>");
		}
		else
		{
			user = $.cookie("MVAuth");
			totalcoins = ccount*25;
			$.post("actions/savecoins.php",{user: user,coins: totalcoins});
		}
		$('#output').show().html(result);
		exit;
	}
}
function start_new(first){
	
	inicount();
	$("#quick_play_wrapper").hide();
	$("#challenges_wrapper").hide();
	$("#selected_questions").fadeIn();
	$("#select_categories").show();
	$('#home').show();
	$('#qbody').show();
	$('.Subm').show();
	$('#ans_input').show();
	$('#ans_body').show();
	$('#ans_input').val('').focus();	
	$('#start_again').hide();
	$('#output').hide();
	$("#hintz").hide();
	$('#msg').hide();
	$('#time').show();
	$("#timestatus").show();
	qlimit=1000;
	qcount=0;
	ccount=0;
	wcount=0;
	scount=0;
	ol=1;
	id='';
	switch(first){
		case 'mix':
			$("#scat").hide();
			$("#tstatus").show();
			$("#result").show();
			$("#action_buttons").show();
			get_qus();
			break;
		case 'as':
			single('as');
				$("#scat").hide();
				$("#stat").show();
				$("#tstatus").show();
				$("#result").show();
				$("#action_buttons").show();
			break;
		case 'md':
			single('md');
					$("#scat").hide();
					$("#stat").show();
					$("#tstatus").show();
					$("#result").show();
					$("#action_buttons").show();
			break;
		case 'sq':
			single('sq');
					$("#scat").hide();
					$("#stat").show();
					$("#tstatus").show();
					$("#result").show();
					$("#action_buttons").show();
			break;
		case 'fac':
			single('fac');
					$("#scat").hide();
					$("#stat").show();
					$("#tstatus").show();
					$("#result").show();
					$("#action_buttons").show();
			break;
		case 'appr':
			single('appr');
					$("#scat").hide();
					$("#stat").show();
					$("#tstatus").show();
					$("#result").show();
					$("#action_buttons").show();
			break;
		default:
				alert('starting error;')
			
		}
	}
function get_qus(){
	id='mix';
		$("#cq").html(qcount);
		$("#ra").html(ccount);
		$("#wa").html(wcount);
		$("#sq").html(scount);
		if(ittime<30){	
			x=Math.floor((Math.random()*30)+2);
			y=Math.floor((Math.random()*30)+2);
			}
		else if(30<ittime && ittime<60){	
			x=Math.floor((Math.random()*60)+2);
			y=Math.floor((Math.random()*60)+2);
			if(x<20)
				x=x+20;
			if(y<20)
				y=y+20;
			}
		else {
			x=Math.floor((Math.random()*90)+2);
			y=Math.floor((Math.random()*90)+2);
			if(x<40)
				x=x+40;
			if(y<40)
				y=y+40;
			}
		a=Math.floor((Math.random()*8)+1);
		x=Math.floor((Math.random()*30)+2);
		y=Math.floor((Math.random()*30)+2);
		var z=1;
		qus='';
		calculate(a,x,y,z);	
}
function calculate(b,p,q,r){
		if(r>2){
			canswer=p;
			id1='mix';
			$('#ans_body').html(canswer);
				exit();
				}
		else{
			
			switch(b)
			{
				case 1:
					multiplication(p,q,r);
					break;
				case 2:
					subtraction(p,q,r);
					break;
				case 3:
					addition(p,q,r);
					break;
				case 4:
					division(p,q,r);
					break;
				case 5:
					factorial(p,q,r);
					break;
				case 6:
					square(p,q,r);
					break;
				case 7:
					cube(p,q,r);
					break;
				case 8:
					squareroot(p,q,r);
					break;
				default:
					alert(b+'error');				
					break;
			}
		}
}
function addition(m,n,ol){
		if(ol==1){
			qus=qus+'('+m+'+'+n+')';
			$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
			}
		else{
			qus=qus+' + '+n;
			$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);		
			}
		m=m+n;
		if(ittime<30){	
			n=Math.floor((Math.random()*30)+2);	
			}
		else if(30<ittime && ittime<60){	
			n=Math.floor((Math.random()*50)+2);
			if(n<20)
				n=n+20;	
			}
		else {
			n=Math.floor((Math.random()*100)+2);
			if(n<40)
				n=n+40;	
			}
		a=Math.floor((Math.random()*3)+1);	
		ol++;
		calculate(a,m,n,ol);
}
function subtraction(m,n,ol){
		if(ol==1){
			qus=qus+'('+m+' - '+n+')';
			$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
			}
		else{
			qus=qus+' - '+n;
			$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);		
			}
		m=m-n;
		if(ittime<30){	
			n=Math.floor((Math.random()*30)+2);	
			}
		else if(30<ittime && ittime<60){	
			n=Math.floor((Math.random()*50)+2);
			if(n<20)
				n=n+20;	
			}
		else {
			n=Math.floor((Math.random()*100)+2);
			if(n<40)
				n=n+40;	
			}
		a=Math.floor((Math.random()*3)+1);
		ol++;
		calculate(a,m,n,ol);
}
function multiplication(m,n,ol){
			if(ittime<30){	
				m=Math.floor((Math.random()*10)+2);	
			}
		else if(30<ittime && ittime<60){	
			m=Math.floor((Math.random()*25)+2);
			if(m<20)
				m=m+20;	
			}
		else {
			m=Math.floor((Math.random()*30)+2);
			if(m<40)
				m=m+40;	
			}
			if(ol==1){
			qus=qus+'('+m+' x '+n+')';
			$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
			}
		else{
			qus=qus+' x '+n;
			$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);		
			}
			
		m=m*n;
	
	if(ittime<30){	
			n=Math.floor((Math.random()*30)+2);	
			}
		else if(30<ittime && ittime<60){	
			n=Math.floor((Math.random()*50)+2);
			if(n<20)
				n=n+20;	
			}
		else {
			n=Math.floor((Math.random()*100)+2);
			if(n<40)
				n=n+40;	
			}
		a=Math.floor((Math.random()*3)+1);		
		ol++;
		calculate(a,m,n,ol);
}
function division(m,n,ol){
		var gg=m*n;
		if(ol==1){
			qus=qus+'('+gg+' / '+n+')';
			$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
			}
		else{
			qus=qus+' / '+n;
			$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);			
			}
		m=gg/n;
		if(ittime<30){	
			n=Math.floor((Math.random()*30)+2);	
			}
		else if(30<ittime && ittime<60){	
			n=Math.floor((Math.random()*50)+2);
			if(n<20)
				n=n+20;	
			}
		else {
			n=Math.floor((Math.random()*100)+2);
			if(n<40)
				n=n+40;	
			}
		a=Math.floor((Math.random()*3)+1);
		ol++;
		calculate(a,m,n,ol);
		}
function factorial(m,n,ol){
	var g=Math.floor((Math.random()*4)+2);
	qus=qus+g+'!';
	$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
		if(g==3){
				m=6;}
		else if(g==4){
				m=24;}
		else if(g==5){
			m=120;}
		else if(g==6){
				m=720;}
		else if(g==7){
			m=5040;}
	if(ittime<30){	
			n=Math.floor((Math.random()*30)+2);	
			}
		else if(30<ittime && ittime<60){	
			n=Math.floor((Math.random()*50)+2);
			if(n<20)
				n=n+20;	
			}
		else {
			n=Math.floor((Math.random()*100)+2);
			if(n<40)
				n=n+40;	
			}
		a=Math.floor((Math.random()*3)+1);	
		ol++;
		calculate(a,m,n,ol);
		}
function square(m,n,ol){
	m=Math.floor((Math.random()*40)+2);
	qus=qus+m+'<sup>2</sup>';
	$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
		m=m*m;
		if(ittime<30){	
			n=Math.floor((Math.random()*30)+2);	
			}
		else if(30<ittime && ittime<60){	
			n=Math.floor((Math.random()*50)+2);
			if(n<20)
				n=n+20;	
			}
		else {
			n=Math.floor((Math.random()*100)+2);
			if(n<40)
				n=n+40;	
			}
		a=Math.floor((Math.random()*3)+1);		
		ol++;
		calculate(a,m,n,ol);
		}
function cube(m,n,ol){
	m=Math.floor((Math.random()*10)+2);
	qus=qus+m+'<sup>3</sup>';
	$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
		m=m*m*m;
	if(ittime<30){	
			n=Math.floor((Math.random()*30)+2);	
			}
		else if(30<ittime && ittime<60){	
			n=Math.floor((Math.random()*50)+2);
			if(n<20)
				n=n+20;	
			}
		else {
			n=Math.floor((Math.random()*100)+2);
			if(n<40)
				n=n+40;	
			}
		a=Math.floor((Math.random()*3)+1);	
		ol++;
		calculate(a,m,n,ol);
		}
function squareroot(m,n,ol){
	m=Math.floor((Math.random()*30)+2);
	var k=m*m;
	qus=qus+'√'+k;
	$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
		m=k/m;
		if(ittime<30){	
			n=Math.floor((Math.random()*30)+2);	
			}
		else if(30<ittime && ittime<60){	
			n=Math.floor((Math.random()*50)+2);
			if(n<20)
				n=n+20;	
			}
		else {
			n=Math.floor((Math.random()*100)+2);
			if(n<40)
				n=n+40;	
			}
		a=Math.floor((Math.random()*3)+1);		
		ol++;
		calculate(a,m,n,ol);
		}
function single(opt){
	$('#home').show();
	$('#start_again').hide();
	$('#output').hide();
	$('#msg').hide();
	$('#ans_input').show();
	$('#submit').show();
	$('#skip').show();
	$('#ans_body').show();
	$('#ans_input').val('').focus();	
	if(qcount<qlimit){
		$("#cq").html(qcount);
		$("#ra").html(ccount);
		$("#wa").html(wcount);
		$("#sq").html(scount);
		a=Math.floor((Math.random()*2)+1);
		x=Math.floor((Math.random()*100)+2);
		y=Math.floor((Math.random()*100)+2);
		z=Math.floor((Math.random()*100)+2);
		qus='';
		if(opt=='as'){
			id='as';
			id1='as';
			switch(a){
				case 1:
						   m=x+y+z;
						   qus=qus+'('+x+'+'+y+')+'+z;
						   $('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
						   break;
				case 2:
							m=((x+y)-z);
							qus=qus+'('+x+'+'+y+')-'+z;
							$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
							break;
				case 3:
						   m=((x-y)+z);
						   qus=qus+'('+x+'-'+y+')+'+z;
						   $('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
						   break;
				case 4:
							m=((x-y)+z);
							qus=qus+'('+x+'-'+y+')-'+z;
							$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
							break;
				default:
					alert('error');	
				}}
		else if(opt=='md'){
			id='md';
			id1='md';
			switch(a){
			case 1:
					   m=((x*y)/z);
					   qus=qus+'('+x+'*'+y+')/'+z;
					   $('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
					   break;
			case 2:
						m=((x/y)*z);
						qus=qus+'('+x+'/'+y+')*'+z;
						$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
						break;
			case 3:
					   m=((x*y)*z);
					   qus=qus+'('+x+'*'+y+')*'+z;
					   $('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
					   break;
			case 4:
						m=((x/y)/z);
						qus=qus+'('+x+'/'+y+') /'+z;
						$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
						break;
			default:
				alert('error');	
			}
				}
		else if(opt=='appr'){
				id='appr';
				id1='appr';
				x=Math.floor((Math.random()*10000)+2);
				y=Math.floor((Math.random()*100)+2);
				m=x/y;
				qus=qus+x+'/'+y;
				$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);			
			
			}
		else if(opt=='sq'){
				id='sq';
				id2='sq';
				x=Math.floor((Math.random()*40)+2);
				y=Math.floor((Math.random()*10)+2);
				var opt1=Math.floor((Math.random()*3)+1);
				switch(opt1){
					case 1:
							m=(x*x)+(y*y*y);
							qus=qus+x+"<sup>2</sup> + "+y+"<sup>3</sup>";
							break;
					case 2:
							m=(y*y*y)-(x*x);
							qus=qus+y+"<sup>3</sup> - "+x+"<sup>2</sup>";
							break;
					case 3:
							m=(x*x)*(y*y*y);
							qus=qus+x+"<sup>2</sup> * "+y+"<sup>3</sup>";
							break;
					}
				
				$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);			
			}
		else if(opt=='fac'){
				id='fac';
				id2='fac';
				x=Math.floor((Math.random()*6)+2);
				y=Math.floor((Math.random()*6)+2);
				z=Math.floor((Math.random()*6)+2);
				var opt2=Math.floor((Math.random()*3)+1);
				switch(opt2){
				case 1:
						qus=qus+x+'! + '+y+'! + '+z+'!';
							if(x==3||y==3||z==3){
									x=6;y=6;z=6;}
							else if(x==4||y==4||z==4){
									x=24;y=24;z=24;}
							else if(x==5||y==5||z==5){
								x=120;y=120;z=120;}
							else if(x==6||y==6||z==6){
									x=720;y=720;z=720;}
							else if(x==7||y==7||z==7){
								x=5040;y=5040;z=5040;}
						m=x+y+z;
						$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
						break;
				case 2:
						qus=qus+x+'! - '+y+'! - '+z+'!';
							if(x==3||y==3||z==3){
									x=6;y=6;z=6;}
							else if(x==4||y==4||z==4){
									x=24;y=24;z=24;}
							else if(x==5||y==5||z==5){
								x=120;y=120;z=120;}
							else if(x==6||y==6||z==6){
									x=720;y=720;z=720;}
							else if(x==7||y==7||z==7){
								x=5040;y=5040;z=5040;}
						m=(x-y)-z;
						$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
						break;
				case 3:
						qus=qus+x+'! * '+y+'! * '+z+'!';
						if(x==3||y==3||z==3){
									x=6;y=6;z=6;}
							else if(x==4||y==4||z==4){
									x=24;y=24;z=24;}
							else if(x==5||y==5||z==5){
								x=120;y=120;z=120;}
							else if(x==6||y==6||z==6){
									x=720;y=720;z=720;}
							else if(x==7||y==7||z==7){
								x=5040;y=5040;z=5040;}
						m=x*y*z;
						$('#qbody').html("<span id='qcountdiv'>"+(qcount+1)+".</span>"+qus);
						break;
			}
			}
		canswer=m;
		$('#ans_body').html(canswer);
		check_ans(id);
		}
	else{
		$('#qbody').html(qcount+' Questions completed.');
		$("#cq").html(qcount);
		$("#ra").html(ccount);
		$("#wa").html(wcount);
		$("#sq").html(scount);		
		$('#ans_input').hide();
		$('#submit').hide();
		$('#skip').hide();
		$('#ans_body').hide();
		$('#start_again').show();
		$('#output').show();
		$('#time').hide();			
		}	
}
function check_answ(){
	if(id=='appr')
		check_ans(id);
	else 
		check_ans(id);
	}		
function check_ans(oth){		
			get=$('#ans_input').val();
			if(get==''){
					$('#ans_input').val('').focus();				
					}
			else{
				qcount++;
				if(oth=='appr'|| oth=='md'){
					uans=parseFloat(get);
						var a=canswer;
						b=''+a;
						d=b.split(".");
						var d1=d[1].substring(0,1);
						var d2=d[0]+'.'+d1;
						var d3=''+d2;
						var d4=parseFloat(d3);
						canswer=d4;
						var up=canswer+0.05;
						var down=canswer-0.05;
						if(up>uans && uans>down){
							ccount++;
								$('#ans_input').val('').focus();
								if(id=='mix')
									get_qus();
								else 
									single(id);
								}
							else{
								wcount++;
								$('#ans_input').val('').focus();
								if(id=='mix')
									get_qus();
								else 
									single(id);
								}	
							
					}
				else{
								uans=parseInt(get);
								if(uans==canswer){
								ccount++;
								$('#ans_input').val('').focus();
								if(id=='mix')
									get_qus();
								else 
									single(id);
								}
							else{
								wcount++;
								$('#ans_input').val('').focus();
								if(id=='mix')
									get_qus();
								else 
									single(id);
								}
				}}
}
function qus_skip(){
	scount++;
	qcount++;
	if(id=='mix')
		get_qus();
	else 
		single(id);
}
function start_again(){
	switch(id1){
		case 'mix':
				start_new('mix');
				break;
		case 'as':
				start_new('as');
				break;
		case 'md':
				start_new('md');
				break;
		case 'appr':
				start_new('appr');
				break;
		case 'sq':
				start_new('sq');
				break;
		case 'fac':
				start_new('fac');
				break;
		default:
			alert('error');
		}}
		
var isIE = navigator.appName.toLowerCase().indexOf("explorer") > -1;
	document.onkeydown = function(e){
	var ev = isIE?event:e;
	if(ev.charCode && ev.charCode == 13)
		check_answ();
	else{
		//alert(ev.keyCode);
		switch(ev.keyCode){
			case 13:    
				check_answ();
				break;
			case 39:
				qus_skip();
				break;
			case 27:
				exit();
				break;
			
		}
	}
}	