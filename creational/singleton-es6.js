console.log('singleton ES6')

/**
 * Singleton example using an ES6 class
 */
class LoginForm {
  static instance

  /**
   * showForm
   * 
   * Method for showing the form, this will only render the one instance
   * element is the DOM element where you would like the form, this can only be load once
   * 
   * @param {Object} element 
   */
  static showForm(element, submitCallback) {
    if(!LoginForm.instance || !element) {
      const markup = `
        <div>
          <form>
            <label for="name">Name</label>
            <input id="name" />
            <button id="submit">Submit</button>
          </form>
        </div>
      `
    
      element.insertAdjacentHTML('afterbegin', markup)
      const submitBtn = document.getElementById('submit');
      
      /** 
       * Tried to use JS range.createContextualFragment
       * but figured out that the DOM element that this returns is a
       * trimmed down version of the DOM that does not have access to events
       */ 
      submitBtn.addEventListener('click', submitCallback)

      // initiated LoginForm
      LoginForm.instance = new LoginForm()
    }

    // if an instance of the LoginForm exist return this instanced
    return LoginForm.instance
  }
}

(function run () {
  const el = document.getElementById('form')

  const submitCallback = (e) => {
    e.preventDefault()
    alert('Thankyou')
  }

  LoginForm.showForm(el, submitCallback)

  // even tho this is run twice, there is only the one form rendered into the DOM
  LoginForm.showForm(el, submitCallback)
})()
