import NewsSubject from './subject.js'
import NewsOutletObserver from './observer.js'

(function run(News, NewsOutlet) {  
  News.subscribe(new NewsOutlet("en"))
  News.subscribe(new NewsOutlet("ar"))

  News.notify('Important news')
})(new NewsSubject(), NewsOutletObserver)