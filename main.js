const people = [
    { name: "Владинлен", age: 25, budget: 1000 },
    { name: "Саиджан", age: 16, budget: 10000 },
    { name: "Мямятжан", age: 78, budget: 2000 }
]

// Цикл for, es5
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}

// Цикл for of, es6
for (let person of people) {
    console.log(person)
}

// ForEach
people.forEach(function (person, index, array) {
    console.log(person)
})

// Map
const newPeople = people.map(function (person, index, array) {
    return person.name
})

// Filter
const filterPeople = people.filter(function (person, index, array) {
    return person.age >= 18
})

// Reduce
const reducePeople = people.reduce(function (total, person, index, array) {
    return total += person.budget
}, 0)

// Find
const findPeople =  people.find(function (person, index, array) {
    return person.name === "Саиджан"
})

// FindIndex
const findIndexPeople = people.findIndex(function (person, index, array) {
    return person.name === "Саиджан"
})

// Task
const task = people
    .filter(function (person) {
        return person.budget > 3000
    })
    .map(function (person) {
        return {
            info: `${person.name} (${person.age})`,
            budget: person.budget
        }
    })

console.log(task)