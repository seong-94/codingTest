//https://school.programmers.co.kr/learn/courses/30/lessons/178871

/** 실패한 공식 */
function solution(players, callings) {
  var answer = [];
  callings.map((name) => {
    const index = players.indexOf(name);
    players.splice(index - 1, 0, name);
    players.splice(index + 1, 1);
  });
  return players;
}
