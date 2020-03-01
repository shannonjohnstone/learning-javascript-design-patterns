/**
 * News
 * 
 * Subject class (also known as Publisher)
 * 
 * This subject manages a list of it's observers (also known as subscribers)
 * along with setting an interface that can be used to notify each observer
 */
class News {
  constructor() {
    this.observers = [];
  }

  subscribe(subscriber) {
    this.observers.push(subscriber)
  }

  unsubscribe(subscriber) {
    const index = this.observers.indexOf(item => item === subscriber)
    this.observers.splice(index, index)
  }

  notify(data) {
    // receive is the required interface each observer must use to be notified of change
    // notify is a function that takes and object as an argument
    this.observers.forEach((subscriber => subscriber.receive(data)))
  }
}

export default News