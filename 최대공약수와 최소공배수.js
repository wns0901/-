// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.
// 입출력 예
// n	m	return
// 3	12	[3, 12]
// 2	5	[1, 10]

function solution(n, m) {
  let i = 1;
  let divisor = 1;
  let lcm = 0;

  while (true) {
    if (!(n % i) && !(m % i)) {
      divisor *= i;
      n /= i;
      m /= i;
      i = 2;

      continue;
    }

    if (i > n || i > m) {
      lcm = divisor * n * m;

      break;
    }

    i++;
  }

  return [divisor, lcm];
}

console.log(solution(2, 5));
