/**
 * environment file contains information for translate API
 * 
 * https://tech.yandex.com/translate/doc/dg/reference/translate-docpage/
 * 
 * This file contains the URL and KEY required to makes requests to this API
 */
import environment from './env.js'

/**
 * NewsOutlet
 * 
 * A observer (also known as a Subscriber) class
 * This class in defined using the `receive` method
 * which is a required method of the subject (also known as Publisher) it's wanting to be notified of change
 */
class NewsOutlet {
  constructor(language = "en") {
    this.language = language
    this.data = ""
    this.news = ""

    this.apiKey = environment.TRANSLATE_KEY
    this.translateUrl = environment.TRANSLATE_URL
  }

  /**
   * receive
   * @param {object} data 
   * 
   * When there is change from the subject, in this example new text sent to notify
   * this method will run, making a request to the translate API and if successful
   * adding it to the DOM
   */
  async receive(data) {
    this.data = data
    let urlParamList = "?"
    urlParamList += `key=${this.apiKey}`
    urlParamList += `&text=${this.data}`
    urlParamList += `&lang=${this.language}`

    const requestTranslate = async (url) => {
      const options = {
        headers:{'content-type': 'application/json'}
      }

      const response = await fetch(url, options)
      return response.json();
    }
    
    requestTranslate(`${this.translateUrl}${urlParamList}`)
      .then(data => this.reportNews(data))
      .catch(err => {
        throw new Error(`requestTranslate error: ${err}`)
      })
  }

  reportNews(data) {
    const { text: textArray } = data

    const textExists = textArray && textArray.length > 0

    if(textExists) {
      textArray.forEach((text, i) => {
        const markup = `
          <article id="${data.lang}-${i}">
            <p>${text}</p>
          </article>
        `
        
        document.getElementById('news').insertAdjacentHTML('afterbegin', markup)
      })
    }
  }
}

export default NewsOutlet