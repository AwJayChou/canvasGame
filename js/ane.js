//创建海葵类
var aneObj=function(){
    //1.1创建数组保存一个海葵的高度
    this.len=[];
    //1.2创建数组保存没一个海葵的x坐标
    this.x=[];
};
//初始化海葵方法
aneObj.prototype.num=50;
aneObj.prototype.init=function(){
      for(var i=0;i<this.num;i++){
          //初始化海葵高度=200固定值+50随机值
          this.len[i]=200+Math.random()*50;
          //初始化海葵x=i*16+20
          this.x[i]=i*16+Math.random()*20;


      } //console.log(this.len);
};
//绘制海葵方法
aneObj.prototype.draw=function(){
   //1保存画笔状态
    ctx2.save();
   //2.描边宽度 20 紫色 透明的
    ctx2.lineWidth=20;
    ctx2.strokeStyle="#3b154e";
    //给海草添加透明度
    ctx2.globalAlpha=0.6;
    //3.2在线段末尾添加圆角
    ctx2.lineCap="round";
    //循环50次
    for(var i=0;i<this.num;i++){
        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canHeight);
        ctx2.lineTo(this.x[i],canHeight-this.len[i]);
        ctx2.stroke();
    }
   ctx2.restore();
    //开始新路径
    //移动到画布最低端
    //绘制一条直接 画布高度-海葵高度
    //恢复状态

};