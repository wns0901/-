function solution(s) {
  var answer = "";
  if (s.length % 2 === 0) {
    answer = s.substr(s.length / 2 - 1, 2);
  } else {
    answer = s.substr(s.length / 2, 1);
  }
  return answer;
}
s = "qwer";
console.log(solution(s));
