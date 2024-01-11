const arr = ["acloq", "aclow", "acloe", "acloe", "acloe"];

function longestPrefix(strs) {
  const minLengthWord = strs.reduce((acc, cur) =>
    cur.length < acc.length ? cur : acc
  );

  for (let i = minLengthWord.length; i >= 0; i--) {
    const subStr = minLengthWord.slice(0, i);
    if (strs.every((item) => item.startsWith(subStr))) {
      return subStr;
    }
  }
}

console.log(longestPrefix(arr));
