function firstWord(s) {
  // your code here
  let arr=s.split(" ");
  for(let t of arr)
  {
    if(t!='') return t;
  }
	 return ''
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
