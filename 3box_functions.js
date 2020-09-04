
const Box = require('3box')

async function box1(){
  const profile = await Box.getProfile('0x860714FFc0A1f8719986d9e072b69aF91682527a')
  console.log(profile)
}

box1()

// comment #1
