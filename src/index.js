module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let objectConfig = new Map(bracketsConfig);
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(objectConfig.values()) && stack.length === 0){
      return false
    } else if(str[i]===(objectConfig.get(stack[stack.length - 1]))) {
        stack.pop();
      } else {
          stack.push(str[i]);
      }
  }
  return stack.length === 0;
};
