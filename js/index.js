$(document).ready(function()
{
	$(".showtext").hide();
	$("#tstatus").hide();
	$("#question_body").hide();
	$(".page").hide();
	$("#scat").hide();
	$("#hintz").hide();
	$("#box_wrapper").show();
	if($.cookie("MVAuth")==null)
	{
		$("#signin").show();
		$("#userArea").hide();
	}
	else
	{
		$("#signin").hide();
		$("#userArea").show().html($.cookie('MVAuthFname')+", <li><a onclick='logout();'>Logout!</a></li>");
	}
	$("#logo").click(function()
	{
		hidecat();
		$("#create_acc").hide();
		$("#tstatus").hide();
	});
	$("#zero_div").mouseover(function()
	{
		showtext('numb','showtext');
	});
	$("#zero_div").mouseout(function()
	{
		hidetext('numb','showtext');
	});
	$("#one_div").mouseover(function()
	{
		showtext('numb_1','showtext_1');
	});
	$("#one_div").mouseout(function()
	{
		hidetext('numb_1','showtext_1');
	});
	$("#one_div").click(function()
	{
		showcat('Quick Play');
		$("#scat").hide();
	});
	$("#two_div").mouseover(function()
	{
		showtext('numb_2','showtext_2');
	});
	$("#two_div").mouseout(function()
	{
		hidetext('numb_2','showtext_2');
	});
	$("#two_div").click(function()
	{
		showcat('Challenges');
		//alert("Coming Soon");
	});
	$("#three_div").mouseover(function()
	{
		showtext('numb_3','showtext_3');
	});
	$("#three_div").mouseout(function()
	{
		hidetext('numb_3','showtext_3');
	});
	$("#three_div").click(function()
	{
		//showcat('Tournaments');
		alert("Coming Soon");
	});
});
function showtext(id1,id2)
{
	$("#"+id1).fadeOut(0);
	$("#"+id2).fadeIn(0);
}
function hidetext(id1,id2)
{
	$("#"+id1).fadeIn(0);
	$("#"+id2).fadeOut(0);
}
function showcat(value)
{
	$("#box_wrapper").hide();
	$("#scat").hide();
	$("#ans_input").hide();
	$("#action_buttons").hide();
	$("#result").hide();
	$("#selected_questions").hide();
	$("#select_categories").hide();
	$("#question_body").fadeIn();
	if(value=='Quick Play')
	{
		$("#challenges_wrapper").hide();
		$("#quick_play_wrapper").show();
		$("#optdiv").show();
	}
	if(value=="Challenges")
	{
		$("#challenges_wrapper").show();
		$("#quick_play_wrapper").hide();
	}
}
function showoptlist()
{
	$("#optdiv").hide();
	$("#scat").show();
}
function hidecat()
{
	$(".showtext").hide();
	$("#question_body").hide();
	$("#box_wrapper").fadeIn();
}
function showlogin()
{
	$("#back").fadeIn(300);
	$("#login_wrapper").fadeIn(600);
}
function hidelogin()
{
	$("#back").fadeOut();
	$("#login_wrapper").fadeOut();
}
function showcreateacc()
{
	hidelogin();
	$(".page").hide();
	$("#create_acc").show();
}
function creataccount()
{
	var fullname = $("#signupFname").val();
	var username = $("#signupUname").val();
	var passwd1 = $("#signupPasswd1").val();
	var passwd2 = $("#signupPasswd2").val();
	var secque = $("#signupQuestion").val();
	var secans = $("#signupAnswer").val();
	var dob = $("#signupDob").val();
	if(fullname=="")
	{
		$("#signupFname").focus();
		$("#signupHint").show().html("<span style='font-size:12px;'>Please provide your Fullname.</span>");
	}
	else if(username=="")
	{
		$("#signupUname").focus();
		$("#signupHint").show().html("<span style='font-size:12px;'>Please provide your Username.</span>");
	}
	else if(passwd1=="")
	{
		$("#signupPasswd1").focus();
		$("#signupHint").show().html("<span style='font-size:12px;'>Please provide your Password.</span>");
	}
	else if(passwd2=="")
	{
		$("#signupPasswd2").focus();
		$("#signupHint").show().html("<span style='font-size:12px;'>Please confirm your Password.</span>");
	}
	else if(secque=="")
	{
		$("#signupAnswer").hide();
		$("#signupQuestion").focus();
		$("#signupHint").show().html("<span style='font-size:12px;'>Please select your security question.</span>");
	}
	else if(secque!="" && secans=="")
	{
		$("#signupAnswer").focus();
		$("#signupHint").show().html("<span style='font-size:12px;'>Please answer your security question.</span>");
	}
	else if(passwd1!=passwd2)
	{
		$("#signupPasswd1").focus().val("");
		$("#signupPasswd2").val("");
		$("#signupHint").show().html("<span style='font-size:12px;color:red;'>Passwords does not match.</span>");
	}
	else if(dob==""||dob.length<10)
	{
		$("#signupDob").focus();
		$("#signupHint").show().html("<span style='font-size:12px;'>Please provide your Date of Birth.</span>");
	}
	else
	{
		$.post("actions/checkusername.php",{username:username},function(data)
		{
			if(data=="green")
			{
				$("#signupHint").show().html("<span style='font-size:12px;color:green;'>A Little House Keeping..</span>");
				$.post("actions/createaccount.php",{fullname:fullname,username:username,passwd:passwd2,secq:secque,seca:secans,dob:dob},function(data)
				{
					if(data=='green')
					{
						$("#signupHint").show().html("<span style='font-size:12px;color:green;'>Account created Successfully.</span>");
						$("#loginPasswd").val("");
						$(".page").hide();
						$("#box_wrapper").show();
					}
					else
					{
						$("#signupHint").show().html("<span style='font-size:12px;color:red;'>An error occured..</span>");
						$(".page").hide();
						$("#box_wrapper").delay(1000).show();
					}
				});
			}
			else
			{
				$("#signupHint").show().html("<span style='font-size:12px;color:red;'>Username is not available.</span>");
			}
		});
	}
}
function signin()
{
	var username=$("#loginUname").val();
	var password=$("#loginPasswd").val();
	if(username=="")
	{
		$("#signinHint").show().html("<span style='font-size:12px;color:red;'>Please provide username</span>");
	}
	else if(username=="")
	{
		$("#signinHint").show().html("<span style='font-size:12px;color:red;'>Please provide password</span>");
	}
	else
	{
		$.post("actions/signin.php",{username:username,password:password},function(data)
		{
			if(data=='green')
			{
				$("#signinHint").hide().html("");
				$("#loginPasswd").val("");
				hidelogin();
				$("#signin").hide();
				$(".page").hide();
				$("#box_wrapper").show();
				$("#userArea").show().html($.cookie('MVAuthFname')+", <a onclick='logout();'>Logout!</a>");
			}
			else
			{
				$("#signinHint").show().html("<span style='font-size:12px;color:red;'>Username, Passwords does not match.</span>");
			}
		});
	}
}
function logout()
{
	$.post("actions/signout.php",function(data)
	{
		$("#signin").show();
		$("#userArea").hide().html();
		$(".page").hide();
		$("#box_wrapper").show();
	});
}
function gotohome()
{
	hidecat();
	$("#tstatus").hide();
}