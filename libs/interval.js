
class sleep{
  constructor(callback,interval,id){
    this.mapCollections = new Map()
    this.interval = interval
    this.startTime = Date.now()
    this.endTime = this.startTime
    this.mapCollections.set(id,this.startTime)
    this.id = id;
    this.start(callback)
   
  }

  start(callback){
    let self =this;
    let loop = function(){
      let obj = [self.id]
      obj = window.requestAnimationFrame(loop)
      self.endTime =  Date.now()
      if (self.endTime - self.startTime >= self.interval) {
        self.startTime = self.endTime = Date.now()
        callback()
      }
    }
    window.requestAnimationFrame(loop)
  }

  clear(id){
    let obj =[self.id]
    window.cancelAnimationFrame(obj)
  }
}



var _instance = null;
function SleepLoop(callback,interval,id,key) {
  if(!_instance){
    _instance = new sleep(callback,interval,id,key);
  }
  return _instance
}

 module.exports = SleepLoop

