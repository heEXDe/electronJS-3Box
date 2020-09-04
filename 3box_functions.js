
const Box = require('3box')

async function box1(){
  const profile = await Box.getProfile('0x268F8c402fAF167De657ADaC732cE737eAbac1aC')
  console.log(profile)
}

box1()

// comment #1
// comment #2
