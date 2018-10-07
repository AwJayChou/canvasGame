var babyObj=function(){
    this.x;
    this.y;
    this.angle;
    this.babyEye=[];
    this.babyBody=[];
    this.babyTail=[];
    //图片下表
    this.babyBodyIndex=0;
    this.babyBodyStart=1;
    this.babyBodyEnd=2000;
    //眼睛
    this.babyEyeIndex=0;
    this.babyEyeStart=1;
    this.babyEyeEnd=3000;
    //尾巴图片下标
    this.babyTailIndex=0;
    this.babyTailStart=1;
    this.babyTailEnd=2000;
};
babyObj.prototype.init=function(){
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    this.angle=0;
    for(var i=0;i<2;i++){
        this.babyEye[i]=new Image();
        this.babyEye[i].src="src/babyEye"+i+".png";
    }
    for(var i=0;i<=19;i++){
        this.babyBody[i]=new Image();
        this.babyBody[i].src="src/babyFade"+i+".png";
    }
    for(var i=0;i<8;i++){
        this.babyTail[i]=new Image();
        this.babyTail[i].src="src/babyTail"+i+".png";
    }
    //console.log(this.babyTail)
};
babyObj.prototype.index=function(){
    this.babyBodyIndex=0;
};
babyObj.prototype.draw=function(){
    //小鱼趋向大于角度距离
    this.x=lerpDistance(mom.x,this.x,0.98);
    this.y=lerpDistance(mom.y,this.y,0.99);
    //计算XY坐标差
    var delx=mom.x-this.x;
    var dely=mom.y-this.y;
    var beta=Math.atan2(dely,delx)+Math.PI;
    this.angle=lerpAngle(beta,this.angle,0.6);
    //切换大鱼身体的图片
    this.babyBodyStart+=deltaTime;
    if(this.babyBodyStart>this.babyBodyEnd){
        this.babyBodyIndex+=1;
        this.babyBodyStart=0;
        if(this.babyBodyIndex>19){
            this.babyBodyIndex=19;//小鱼额
        }
    }
    //切换小鱼尾巴
    this.babyTailStart+=deltaTime;
    if(this.babyTailStart>this.babyTailEnd){
        this.babyTailIndex=(this.babyTailIndex+1)%8;
        this.babyTailStart=1;
    }
    //切换小鱼
    this.babyEyeStart+=deltaTime;
    if(this.babyEyeStart>this.babyEyeEnd){
        this.babyEyeIndex=(this.babyEyeIndex+1)%2;
        this.babyEyeStart=1;
    }
    if(this.babyEyeIndex==0){
        this.babyEyeEnd=3000;
    }
    if(this.babyEyeIndex==1) this.babyEyeEnd=200;
    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(
        this.babyBody[this.babyBodyIndex],
        -this.babyBody[this.babyBodyIndex].width*0.5,
        -this.babyBody[this.babyBodyIndex].height*0.5
    );
    ctx1.drawImage(
        this.babyTail[this.babyTailIndex],
        -this.babyTail[this.babyTailIndex].width*0.5+23,
        -this.babyTail[this.babyTailIndex].height*0.5
    );
    //眼睛放最后做
    ctx1.drawImage(
        this.babyEye[this.babyEyeIndex],
        -this.babyEye[this.babyEyeIndex].width*0.5,
        -this.babyEye[this.babyEyeIndex].height*0.5
    );
    ctx1.restore();
};