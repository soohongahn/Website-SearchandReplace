var foundNum = 0;

document.getElementById("clearButton").onclick=function(){
  document.getElementById("incoming").value = "";
  document.getElementById("wordSearch").value = "";
  document.getElementById("wordReplace").value = "";
  document.getElementById("searchResult").innerHTML = "";
  document.getElementById("foundNum").innerHTML = "";
}

document.getElementById("searchSubmit").onclick=function(){
  var inputText = document.getElementById("incoming").value;
  var searchWord = document.getElementById("wordSearch").value;

  document.getElementById("searchResult").innerHTML = searchForWord(searchWord, inputText);;
  document.getElementById("foundNum").innerHTML = "Found: " + foundNum;
  foundNum = 0;
}

document.getElementById("replaceSubmit").onclick=function(){
  var inputText = document.getElementById("incoming").value;
  var searchWord = document.getElementById("wordSearch").value;
  var replaceText = document.getElementById("wordReplace").value;

  document.getElementById("searchResult").innerHTML = replaceWord(searchWord, inputText, replaceText);
  document.getElementById("foundNum").innerHTML = "Found: " + foundNum;

  foundNum = 0;
}

function replaceWord(keyword, text, replaceText){
  var searchWord = keyword;
  var inputText = text;
  var result = "";
  var startIndex = 0;

  if(searchWord == null || !searchWord || !inputText){
    return result;
  }

  while(inputText.search(searchWord) != -1){
    startIndex = inputText.search(searchWord);
    if (startIndex != -1){
      result += inputText.substring(0, startIndex);
      result += "<span class='found'>" + replaceText + "</span>";
      foundNum++;
    }
    inputText = inputText.substring(startIndex + searchWord.length);
  }
  result += inputText;

  return result;
}

function searchForWord(keyword, text){
  var searchWord = keyword;
  var inputText = text;
  var result = "";
  var startIndex = 0;

  if(searchWord == null || !searchWord || !inputText){
    console.log("exit");
    return result;
  }

  while(inputText.search(searchWord) != -1){
    startIndex = inputText.search(searchWord);
    if (startIndex != -1){
      result += inputText.substring(0, startIndex);
      result += "<span class='found'>" + inputText.substring(startIndex, startIndex+searchWord.length) + "</span>";
      foundNum++;
    }
    inputText = inputText.substring(startIndex + searchWord.length);
  }
  result += inputText;

  return result;
}
