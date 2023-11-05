//https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  let idx1 = 0;
  let idx2 = 0;

  for (let i = 0; i < goal.length; i++) {
    if (cards1[idx1] === goal[i]) {
      idx1++;
    } else if (cards2[idx2] === goal[i]) {
      idx2++;
    } else {
      return "No";
    }
  }
  return "Yes";
}

/* 단순한 문제 해결이였다. 주어진 3개의 배열에 card1 , card2 의 배열이 goal 배열과 순서 대로 교차해서 똑같다면 
 Yes 를 return 하는 것이고 아니라면, No 를 return 하는것인데, 
  goal 배열이 하나 씩 올라가며 각 배열과 비교를 하며 idx# 를 차례대로 올라가는 방법
*/
