'use strict';
class Question {
  static All(){
    return this._All
  }

  static Find()id {
    return this.ALL()[id - 1]
  }
  constructor(content){
    this.content = content;
    this.save()
  }

save() {
  this.constructor._All.push(this)
  }
  
}

Question._All = []
