/**
 collsion.js完成碰撞检测
 */
/**
 * 碰撞检测：大鱼和多个食物15状态为true
 * 如果大鱼和某个食物距离小于等于30px
 * 食物被大鱼吃了
 * 将食物alive[i]=false
 */
var fruitlen=900;
function momFruitsCollsion(){
    //循环所有食物
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
           var len=calLength2(
               fruit.x[i],fruit.y[i],
               mom.x,mom.y
           );
           if(len<fruitlen){
               fruit.dead(i);
               //fruit.alive[i]=false;
           }
    }
    //判断当前食物状态
}
}
function mombaby(){
    var leng=calLength2(mom.x,mom.y,baby.x,baby.y);
    if(leng<fruitlen)
        baby.index();
}
