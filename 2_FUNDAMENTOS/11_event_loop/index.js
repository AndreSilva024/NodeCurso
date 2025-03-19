function a () {
  console.log('Rodando A')
}

function b () {
  console.log('Rodando B')
}

function c () { 
  console.log('Rodando C')
  a()
  b()
}


c()
