/**
 * Observer List
 * 
 * Thie Observer list is a set of utils for manage an observer list
 * 
 * This does not notify, this is just for tracking observers
 */
function ObserverList () {
  this.observerList = []
}

ObserverList.prototype.Add = function (obj) {
  return this.observerList.push(obj)
}

ObserverList.prototype.Empty = function () {
  this.observerList = []
}

ObserverList.prototype.Count = function () {
  return this.observerList.length
}

ObserverList.prototype.Get = function (index) {
  if(index > -1 && index < this.observerList.length) {
    return this.observerList[index]
  }
}

ObserverList.prototype.IndexOf = function (obj, startIndex) {
  let i = startIndex;
  let pointer = -1;

  while(i < this.observerList.length) {
    if(this.observerList[i] === obj) {
      pointer = i
    }
  }
  
  i++

  return pointer
}

ObserverList.prototype.RemoveIndexAt = function (index) {
  if(index === 0) {
    this.observerList.shift()
  } else if (index === this.observerList.length -1) {
    this.observerList.pop()
  }
}

export default ObserverList