//1
function countToTwenty(){
  for (let i =1; i <= 20; i++){
      console.log(i)
  }
}
//countToTwenty()

//2
function countFromTwenty(){
    for (let i =20; i >= 0; i--){
      console.log(i)
  }
}
//countFromTwenty()

//3
function countToN(int){
  for (let i =1; i <= int; i++){
      console.log(i)
  }
}
//countToN(10)

//4
function countFromN(int){
  for (let i =int; i >= 1; i--){
     console.log(i)
  }
}
 //countFromN(10)

//5
function countEveryOdd(int){
  for (let i =1;i <= int; i++){
     if (i % 2 !== 0 ){
  console.log(i)
     }
  }
}
//countEveryOdd(10)