module.exports = function check(str, bracketsConfig) {
  // your solution
  const opening = [];
  const closing = [];

  for (let br of bracketsConfig) {
    opening.push(br[0]);
    closing.push(br[1]);
  }

  const opened = [];

  while (str) {
    const bracket = str[0];
    str = str.slice(1);
    const closingInd = closing.indexOf(bracket);

    if (closingInd === -1) {
      opened.push(bracket);
    }
    else {
      if (opened.length === 0) {
        if (opening.includes(bracket)) {
          opened.push(bracket);
        }
        else {
          return false;
        }
      }
      else {
        const lastOpened = opened.pop();
        if (opening.indexOf(lastOpened) !== closingInd) {
          if (opening.includes(bracket)) {
            opened.push(lastOpened, bracket);
          }
          else {
            return false;
          }
        }
      }
    }
  }

  if (opened.length !== 0) {
    return false;
  }
  else {
    return true;
  }
}
