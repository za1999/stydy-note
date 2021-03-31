var app =new Vue({
	el:'#app',
	data:{
		
	},
	methods :{
		onclick:function(){
			console.log("我是单点击事件");
		},
		onEnter:function(){
			console.log("我进来了");
		},
		onOut : function(){
			console.log("我出去了");
		},
		onsubmit:function(){
			console.log("提交了");
		},
		onkeyup:function(){
			console.log("我响应了键盘");
		}
	}
});