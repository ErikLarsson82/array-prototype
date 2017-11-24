
const list = [
  { id: 1 },
  { id: 2 },
  { id: 3}
]

if (typeof Array.prototype.pluck === "undefined") {
    Array.prototype.pluck = function (id) {
        return _.pluck(this, id)
    }
}

if (typeof Array.prototype.sortBy === "undefined") {
    Array.prototype.sortBy = function (iteratee) {
        return _.sortBy(this, iteratee)
    }
}

const result = list.pluck("id")
    .map(num => num * 2)
    .sortBy(num => num * -1)

console.log(result)