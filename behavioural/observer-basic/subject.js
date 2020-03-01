import ObserverList from './observer-list.js.js'

/**
 * Subject
 * 
 * Subject (also known as Publisher) is an object responsibly for maintaining and notifying a list of observers (also known as Subscribers)
 */
function Subject() {
  // create an Observers list instance, passing all methods on
  this.observers = new ObserverList()
}

Subject.prototype.AddObserver = function (observer) {
  this.observers.Add(observer)
}

Subject.prototype.RemoveObserver = function (observer) {
  const index = this.observers.IndexOf(observer, 0)
  this.observers.RemoveIndexAt(index)
}

// Notify is the job of the subject, it should notify all Observer elements
// that have add themselves to the observer list
Subject.prototype.Notify = function (context) {
  let observerCount = this.observers.Count()

  // When Notify is invoked, it loops over the entire list of all the elements that were added to the observer list
  // it will then find and run there Update method
  for (let index = 0; index < observerCount; index++) {
    this.observers.Get(index).Update(context)
  }
}

export default Subject