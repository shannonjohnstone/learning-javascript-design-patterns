import Subject from './subject.js';
import Observer from './observer.js';
import { extend } from './helpers.js'

const controlCheckbox = document.getElementById('mainCheckbox')
const addBtn = document.getElementById('button')
const container = document.getElementById('observerContainer')

// create a subject, in this case that subject is a checkbox
// the checkbox value change is being tracked
extend(new Subject(), controlCheckbox)

// attach a click event to the checkbox
// this is also the trigger for firing the Notify
controlCheckbox.addEventListener('click', function (e) {
  controlCheckbox.Notify(e.target.checked)
})

// add an observer, an observer is something that is wanting to be notified of a change
function addObserver() {
  let checkboxEl = document.createElement('input')
  checkboxEl.type = 'checkbox'

  // pass all Observer methods onto the checkbox
  extend(new Observer(), checkboxEl)

  // Override the Observer Update method
  checkboxEl.Update = function (value) {
    this.checked = value
  }

  // Add item to the list of Observers to be notified when there is a change
  controlCheckbox.AddObserver(checkboxEl)

  container.appendChild(checkboxEl)
}

addBtn.addEventListener('click', function () {
  addObserver();
})