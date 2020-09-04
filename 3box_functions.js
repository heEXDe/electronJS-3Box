//import Authereum from 'authereum'
const {Authereum} = require('authereum')
const Box = require('3box')
// const authereum = new Authereum('kovan')
const authereum = new Authereum('kovan')
authereum.login()

async function fbox1(){
  const profile = await Box.getProfile('0x268F8c402fAF167De657ADaC732cE737eAbac1aC')
  console.log(profile)
  document.getElementById('div_3').innerHTML = profile.description

}

fbox1()
