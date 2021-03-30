function bin2String(array) {
  return String.fromCharCode.apply(String, array);
}

function string2Bin(str) {
  var result = [];
  for (var i = 0; i < str.length; i++) {
    result.push(str.charCodeAt(i));
  }
  return result;
}

function hex2str(hex) {
  var trimedStr = hex.trim();
  var rawStr =
    trimedStr.substr(0, 2).toLowerCase() === "0x"
      ? trimedStr.substr(2)
      : trimedStr;
  var len = rawStr.length;
  if (len % 2 !== 0) {
    alert("Illegal Format ASCII Code!");
    return "";
  }
  var curCharCode;
  var resultStr = [];
  for (var i = 0; i < len; i = i + 2) {
    curCharCode = parseInt(rawStr.substr(i, 2), 16);
    resultStr.push(String.fromCharCode(curCharCode));
  }
  return resultStr.join("");
}

function str2hex(str) {
  if (str === "") {
    return "";
  }
  var arr = [];
  arr.push("0x");
  for (var i = 0; i < str.length; i++) {
    arr.push(str.charCodeAt(i).toString(16));
  }
  return arr.join("");
}
