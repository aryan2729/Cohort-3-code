/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
// aab , baa , aba 
  */

function isAnagram(str1, str2) {  
  let sortedString1 = str1.toLowerCase().split("").sort().join("");  // we can write in one line also for explanation see last comment 
  
  let sortedString2 = str2.toLowerCase().split("").sort().join("");

  if( sortedString1 == sortedString2){
    return true ;
  }
  else{
    return false;
  }
}

module.exports = isAnagram;

// For explanation 🚀
// let str1toLowerCas = str1.toLowerCase();// HaR => "har";           |🚀
// let arr1 = str1toLowerCas.split("");  //  har => ["h","a","r"];    | split -> split strings to array 
// arr1.sort(); // ["a","h","r"];                                     | sort -> sort the above array 
// let sortedString1 = arr1.join("");  // string => "ahr";            | join -> join the array characters in string format 

// let str2toLowerCas = str2.toLowerCase();
// let arr2 = str2toLowerCas.split("");
// arr2.sort();
// let sortedString2 = arr2.join(""); 