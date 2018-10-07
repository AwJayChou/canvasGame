/*
入口程序
核心函数
game init gameloop
 */
document.body.onload = game;
var can1 = null;
var can2 = null;
var ctx1 = null;
var ctx2=null;
var canWidth= 0;
var canHeight = 0;
var bgPic = null;
//1.5创建变量保存海葵对象
var ane=null;
//1.6创建变量保存果实对象
var fruit=null;
var mom=null;
//1.7创建两个变量保存上一怔与当前正的时间间隔
var lastTime;//上一帧执行时间

var deltaTime;//二帧间隔时间
//创建两个变量保存鼠标移动的位置
var mx=0;
var my=0;
//创建变量保存小于
var baby=0;

function game(){
    init();
    lastTime=Date.now();
    deltaTime=0;
    gameloop();
}
function init(){
    can1=document.getElementById("canvas1");
    can2=document.getElementById("canvas2");
    //console.log(can1)
    ctx1=can1.getContext("2d");
    ctx2=can2.getContext("2d");
    canWidth=can1.width;
    canHeight=can1.height;
    //console.log(canwidth)
    bgPic = new Image();
    bgPic.src="src/background.jpg";
    //console.log(bgPic)
    //创建海葵的对象并初始化海葵的方法
    ane = new aneObj();
    ane.init();
    //2.6创建果实对象初始化方法
    fruit=new fruitObj();
    fruit.init();
    //创建大鱼对象
    mom=new momObj();
    mom.init();
    //初始化鼠标位置画布中心
    mx=canWidth*0.5;
    my=canHeight*0.5;
    can1.addEventListener("mousemove",onMouseMove,false);
    //创建小鱼对象
    baby=new babyObj();
    baby.init();
}
function gameloop(){
    //创建定时器智能间隔一定时间调用自己gameloop
    requestAnimFrame(gameloop);
    //console.log("DAU热保护")
    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    //console.log(deltaTime);
    //绘制游戏背景
    drawBackground();
    //绘制海葵
    ane.draw();
    //监听画布果实
    fruiMonitor();
    //碰撞检测
    momFruitsCollsion();
    //绘制果实
    fruit.draw();
    //清空画布上原有的内容
    ctx1.clearRect(0,0,canWidth,canHeight);
    //绘制大鱼
    mom.draw();
    mombaby();
    //绘制小鱼
    baby.draw();
}
//main.js
function onMouseMove(e){

   //判断兼容性e.offersetX e.layerX
    if(e.offsetX ||e.layerX)
        mx= e.offsetX==undefined?e.layerX:e.offsetX;
    if(e.offsetY||e.layerY)
        my=e.offsetY==undefined?e.layerY:e.offsetY;

};