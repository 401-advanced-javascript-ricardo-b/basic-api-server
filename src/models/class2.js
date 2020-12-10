class Class2 {
  constructor(){
    this.id = 0;
    this.db = [];
  }

  get(id){
    if(id){
      return
    }else{
      return this.db;
    }
  }

  create(obj){
    obj.id = ++this.id;
    this.db.push(obj);
    return obj;
  }

  update(id, obj){
    if(!id){
      return 'does not exist'
    }else{
      //update an object
    }
  }

  delete(id){
    if(!id){
      return null
    }else{
      //delete the object
      return null
    }
  }
}

module.exports = Class2;