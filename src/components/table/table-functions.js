import { range } from '@core/utils'

export function shouldResize(event) {
  return event.target.dataset.resize
}

export function isCell(event) {
  return event.target.dataset.type === 'cell'
}

export function matrix(target, nextTarget) {
  const cols = range(nextTarget.col, target.col)
  const rows = range(nextTarget.row, target.row)

  return cols.reduce((acc, col) => {
    rows.forEach((row) => acc.push(`${row}:${col}`))
    return acc
  }, [])
}
