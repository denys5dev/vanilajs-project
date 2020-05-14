import { ExcelComponent } from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    })
  }
  toHTML() {
    return /*html*/ `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    console.log('FOrmula on input', event.target.textContent.trim())
  }

  onClick(event) {
    console.log('click', event)
  }
}
