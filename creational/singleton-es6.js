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
  static showForm(element) {
    if(!LoginForm.instance) {
      const markup = `
        <div>
          <form>
            <label for="name">Name</label>
            <input id="name" />
          </form>
        </div>
      `

      element.insertAdjacentHTML('afterbegin', markup)

      // initiated LoginForm
      LoginForm.instance = new LoginForm()
    }

    // if an instance of the LoginForm exist return this instanced
    return LoginForm.instance
  }
}

(function run () {
  const el = document.getElementById('form')
  LoginForm.showForm(el)

  // even tho this is run twice, there is only the one form rendered into the DOM
  LoginForm.showForm(el)   
})()
