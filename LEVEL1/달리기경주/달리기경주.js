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

/**성공한 코드  */
function solution(players, callings) {
  var answer = [];

  const playerMap = new Map();

  players.forEach((name, index) => {
    playerMap.set(name, index);
  });

  callings.forEach((name) => {
    const nameIdx = playerMap.get(name);
    const frontName = players[nameIdx - 1];

    [players[nameIdx], players[nameIdx - 1]] = [players[nameIdx - 1], players[nameIdx]];

    playerMap.set(name, playerMap.get(name) - 1);
    playerMap.set(frontName, playerMap.get(name) + 1);
  });

  return players;
}
