
 function  Palindromereverse(str){
 
  let sum=""

 for(let i=str.length-1;i>=0;i--){

    sum=sum+str[i];
 }
   return sum
}

 let new_rev=reverse(str)
  if(new_rev==sum){
    console.log("Yes Palinfrome")
  }else{
    console.log("No Not Palindrome")
  }