

// // function parseJson(json) {
// //   clients = JSON.parse(json);
// // }

// // parseJson(clients);

// function mapThroughArray(arr) {
//   arr.forEach(item => console.log(item.account_code))
// }

// mapThroughArray(clients);









const users = [
  {
    userId: 1234,
    company: 'pepsi'

  },
  { 
    userId: 6789,
    company: 'Coke'
  }
]

const favSongs = [
  {
      userId: 1234,
    favSong: 'Disco party'
  },
  {
      userId: 6789,
    favSong: 'Hey sexy'
  },
  {
      userId: 1234,
    favSong: 'Another ones bites'
  },

]

const favFood = [
  {
      userId: 1234,
    favFood: 'Pizza',
    products: [
      {
        spec_number: 'BS 471',
        schedule: '112/442/199'
      },
      {
        spec_number: 'BS 471',
        schedule: '112/452/199'
      }
    ]
  },
  {
      userId: 6789,
    favFood: 'Burger'
  }
]
 let userArr = []

const userFilter = id => (...arrs) =>
  arrs
    .flat()
    .filter(({ userId }) => userId === id)
    .reduce((acc, user) => ({ ...acc, ...user }), {})

const currentUserSearch = userFilter(6789)

// console.log(currentUserSearch(favFood, favSongs)) 

// { userId: 6789, favFood: 'Burger', favSong: 'Hey sexy' }

const latestUserSearch = userFilter(1234)

console.log(latestUserSearch(favFood, users, favSongs)) 

// console.log(userArr)

// userArr.forEach(item => {
//   let { favSong, favFood, products } = item;
//   console.log(favSong)
//   console.log(favFood)
//   products.forEach(product => {
//     console.log(product.spec_number)
//   })


// })
