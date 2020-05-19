export class TableSelection {
  static className = 'selected'
  constructor() {
    this.group = []
    this.prevSelectedCellElement = null
  }

  clear(currentSelected) {
    this.group.forEach(($el) => $el.removeClass(TableSelection.className))
    this.group = []
  }

  select($el) {
    this.clear($el)
    this.group.push($el)
    this.prevSelectedCellElement = $el
    $el.addClass(TableSelection.className)
  }

  selectGroup($group = []) {
    this.clear()

    this.group = $group
    this.group.forEach(($el) => $el.addClass(TableSelection.className))
  }
}
