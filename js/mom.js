var momObj=function(){
    //保存大于位置角度
    //创建三个数组分别保存大鱼眼睛身体尾巴
    this.x;
    this.y;
    this.angle;
    this.bigEye=[];
    this.bigBody=[];
    this.bigTail=[];

    this.bigEyeIndex=0;//当前显示眼睛图片下标
    this.bigEyeStart=1;//切换图片计时结束
    this.bigEyeEnd=2000;

    this.bigBodyIndex=0;//当前身体下标
    this.bigBodyStart=1;
    this.bigBodyEnd=3000;

    this.bigTailIndex=0;
    this.bigTailStart=1;
    this.bigTailEnd=1000;

};
momObj.prototype.init=function(){
   //初始化大鱼位置
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    //初始化大鱼角度
    this.angle=0;
    //加载大鱼眼睛两张图片
    for(var i=0;i<2;i++){
        this.bigEye[i]=new Image();
        this.bigEye[i].src="src/bigEye"+i+".png";
    }
    //console.log(this.bigEye);
    //加载大鱼身体8张图片
    for(var i=0;i<8;i++){
        this.bigBody[i]=new Image();
        this.bigBody[i].src="src/bigSwim"+i+".png";
    }
    //加载尾巴
    for(var i=0;i<8;i++) {
        this.bigTail[i] = new Image();
        this.bigTail[i].src = "src/bigTail"+i+".png";
    }
};

momObj.prototype.draw=function(){
    //使用全局变量mx my
    //this.x=mx;
    //this.y=my;
   this.x=lerpDistance(mx,this.x,0.98);
   this.y=lerpDistance(my,this.y,0.98);
   //获取大鱼取向鼠标角度
    var deltaY=my-this.y;
    var deltaX=mx-this.x;
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;
    this.angle=lerpAngle(beta,this.angle,0.9);
    //切换大鱼眼睛
       this.bigTailStart=this.bigTailStart+deltaTime;
       if(this.bigTailStart>this.bigTailEnd){
           this.bigTailStart=1;
           this.bigTailIndex=(this.bigTailIndex+1)%8;
           
       }
       //加载body
       this.bigBodyStart=this.bigBodyStart+deltaTime;
       if(this.bigBodyStart>this.bigBodyEnd) {
           this.bigBodyStart = 1;
           this.bigBodyIndex = (this.bigBodyIndex + 1) % 8;
           if(this.bigBodyIndex>7){
               this.bigBodyIndex=7;
           }
       }
       //切换大鱼眼睛
        this.bigEyeStart=this.bigEyeStart+deltaTime;
        if(this.bigEyeStart>this.bigEyeEnd){
            this.bigEyeStart=1;
            this.bigEyeIndex=(this.bigEyeIndex+1)%2;
             if(this.bigEyeIndex ==1)  this.bigEyeEnd=200;
             if(this.bigEyeIndex==0) this.bigEyeEnd=2000;
        }

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(
        this.bigBody[this.bigBodyIndex],
        -this.bigBody[this.bigBodyIndex].width*0.5,
        -this.bigBody[this.bigBodyIndex].height*0.5
    );
    ctx1.drawImage(
        this.bigEye[this.bigEyeIndex],
        -this.bigEye[this.bigEyeIndex].width*0.5,
        -this.bigEye[this.bigEyeIndex].height*0.5
    );
    ctx1.drawImage(
        this.bigTail[this.bigTailIndex],
        -this.bigTail[this.bigTailIndex].width*0.5+30,
        -this.bigTail[this.bigTailIndex].height*0.5
    );
    //console.log(this.bigTail[this.bigTailIndex].width);
    ctx1.restore();
};