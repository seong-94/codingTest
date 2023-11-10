function solution(t, p) {
  var answer = 0;
  for (i = 0; i < t.length; i++) {
    const newStr = t.slice(0 + i, p.length + i);
    if (newStr.length < p.length) {
      return answer;
    }
    if (Number(newStr) <= Number(p)) {
      answer += 1;
    }
  }
  return answer;
}
