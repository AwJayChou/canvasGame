var fruitObj=function(){
    //是否活动状态
    this.alive=[];
    //果实的位置
    this.x=[];
    this.y=[];
    //果实长度
    this.l=[];
    this.spd=[];//果实速度
    this.orange=new Image();
    this.blue=new Image();
    this.fruitType=[];
};
//果实数量
fruitObj.prototype.num=30;
//果实初始化方法
fruitObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.alive[i]=false;//默认不活动
        this.x[i]=0;        //出生时指定
        this.y[i]=0;
        this.spd[i]=Math.random()*0.017+0.013;
        this.fruitType[i]="";
        this.l[i]=0;
        //console.log(this.alive);
    }
    this.orange.src="src/fruit.png";
    this.blue.src="src/blue.png";
};
//果实绘制方法
fruitObj.prototype.draw=function(){
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            if(this.l[i]<14){
                //变大
                this.l[i]+=this.spd[i]*deltaTime;
            }else{
                //后向上浮动
                this.y[i]-=this.spd[i]*3*deltaTime;
            }
            if(this.fruitType[i]=="blue"){
                var pic=this.blue;
            }else{
                var pic =this.orange;
            }
            ctx2.drawImage(pic,this.x[i],this.y[i],
                this.l[i],this.l[i]);
            if(this.y[i]<10){
                this.alive[i]=false;
            }
        }

    }
};
//添加果实出生方法
fruitObj.prototype.born=function(i){
    //随机找海葵
    var aneInd=Math.floor(Math.random()*ane.num);
    this.x[i]=ane.x[aneInd];
    this.y[i]=canHeight-ane.len[aneInd];
    this.l[i]=0;
    this.alive[i]=true;
    this.fruitType[i]=Math.random()<0.9?"blue":"orange";
};
//检查是否小鱼15
function fruiMonitor(){
    var num=0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]) num++;
        if(num<15){
            sendFruit();
            return;
        }
    }
}
function sendFruit(){
   for(var i=0;i<fruit.num;i++){
       if(!fruit.alive[i]){
           fruit.born(i);//新出生果实
           return;
       }
   }
}
fruitObj.prototype.dead=function(i){
    this.alive[i]=false;
}