
const list = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 3 }
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

if (typeof Array.prototype.uniq === "undefined") {
    Array.prototype.uniq = function (isSorted, iteratee) {
        return _.uniq(this, isSorted, iteratee)
    }
}

const result = list.pluck("id")
    .map(num => num * 2)
    .sortBy(num => num * -1)
    .uniq()
    .map(num => num + " lolz")

console.log(result)