export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error('No root provided fo DomListener')
    }
    this.$root = $root
  }
}
