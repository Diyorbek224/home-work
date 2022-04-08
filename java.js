
let arr = [[{ d: { price: 20 } }], [{ b: { prices: 35 } }], [{ w: { pricees: 44 } }]]
let total = [0]

total.push(arr[0][0].d.price + arr[1][0].b.prices + arr[2][0].w.pricees)

console.log(total);