
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
    console.log("self",self)
    let loop = function(){
      let obj = [self.id]
      obj = window.requestAnimationFrame(loop)
      self.endTime =  Date.now()
      if (self.endTime - self.startTime >= self.interval) {
        self.startTime = self.endTime = Date.now()
        callback()
        window.cancelAnimationFrame(obj)
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
function Sleep(callback,interval,id) {
  if(!_instance){
    _instance = new sleep(callback,interval,id);
  }
  return _instance
}

 module.exports = Sleep

