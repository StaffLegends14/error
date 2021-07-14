class Arrow{
    constructor(w,h,obj){

       this.x = x;
       this.y = y;
       this.w = w;
       this.h = h;
       this.obj = obj;
       
       var opt = {
           isStatic = true
       };
       this.body = Matter.Body.rectangle(this.obj.position.x,this.obj.position.y,this.w,this.h,opt);
       World.add(world,this.body)

    }

    display(){
       rect(this.body.position.x,this.body.position.y,this.w,this.h,opt)
    }
}