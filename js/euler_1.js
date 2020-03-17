var series = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
function problem() {
  problem_number = document.getElementById("problem_number").value;
  problem_number = problem_number - 1;


  let params = [
    //1
    { a: 3, b: 5, mod: 0, size: 1000, init_val: 1 },
    //2
    { lower: 1, upper: 2, mod: 0, size: 100, init_val: 1, limit: 4000000 },
    //3
    { orig: 147, curr_prime: 2 },
    //4
    { a: 100, b: 100, size: 1000, init_val: 100 },
    //5
    { a: 20, b: 10, size: 20, init_val: 1 },
    //6
    { a: 10, b: 10, size: 100, init_val: 1 },
    //7
    { a: 10, b: 10, size: 10001, init_val: 1 },
    //8
    { size: 13 },
    //9
    { a: 1, size: 1000, limit: 25 },
    //10
    { a: 10, b: 10, size: 2000000, init_val: 1 },
    //11
    { s: "{[()]}" },
  ]
  let res = 0
  switch(problem_number){
    case 0: 
      res = sum_natural_numbers(params[problem_number]);
      break;
    case 1: 
      res = even_fibonacci_numbers(params[problem_number]);
      break;
    case 2: 
      res = largest_prime_factor(params[problem_number]);
      break;
    case 3: 
      res = largest_palindrome(params[problem_number]);
      break;
    case 4: 
      res = smallest_multiple(params[problem_number]);
      break;
    case 5: 
      res = sum_square_difference(params[problem_number]);
      break;
    case 6: 
      res = get_10001st_prime(params[problem_number]);
      break;
    case 7: 
      res = largest_products_series(params[problem_number]);
      break;
    case 8: 
      res = pythagorean_triplet(params[problem_number]);
      break;
    case 9: 
      res = sum_of_primes(params[problem_number]);
      break;
    case 10: 
      res = isBalanced(params[problem_number]);
      break;
    case 11: 
      res = generalizedGCD(5, [2,4,6,8,10]);
      break;
    default:
      res = 0;
      break;
  }

  document.getElementById("p_problem").append(res);
}
//is even number = true or odd = false
function is_even_num(x) {
  return x % 2 === 0 ? true : false;
}
//test is_prime
function is_prime(num) {
  if (num <= 1) return false;
  else if (num <= 3) return true;
  else if (num % 2 == 0 || num % 3 == 0) return false;
  var i = 5;
  while (i * i <= num) {
    if (num % i == 0 || num % (i + 2) == 0) return false;
    i += 6;
  }
  return true
  // if (n === 1) {
  //   return false;
  // } else if (n < 4) {
  //   return true;
  // } else {
  //   for (let x = 2; x < n; x++) {
  //     if (n % x === 0) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
}
// sum natural numbers
function sum_natural_numbers(params) {
  let a = params.a,
    b = params.b, mod = params.mod,
    sum = 0, size = params.size,
    init_val = params.init_val;

  for (let i = init_val; i < size; i++) {
    if ((i % a === mod) || (i % b === mod)) {
      sum += i;
    }
  }
  return sum
}
//sum even fibonacci numbers
function even_fibonacci_numbers(params) {
  let lower = params.lower,
    upper = params.upper, mod = params.mod,
    sum = 0, size = params.size, init_val = params.init_val,
    limit = params.limit, sum_upper_lower = 0;

  var i = init_val;
  do {
    if (i === init_val) {
      sum_upper_lower = upper + lower;
      if (is_even_num(lower)) {
        sum += lower;
      }
      if (is_even_num(upper)) {
        sum += upper;
      }
      if (is_even_num(sum_upper_lower)) {
        sum += sum_upper_lower;
      }

    } else {
      sum_upper_lower = upper + lower;
      if (is_even_num(sum_upper_lower)) {
        sum += sum_upper_lower;
      }
    }

    lower = upper;
    upper = sum_upper_lower;

    i++;
  }
  while (sum_upper_lower < limit);

  return sum
}
//find largest prime factor
function largest_prime_factor(params) {
  let prime_factors = [];
  let orig = params.orig;
  let curr_prime = params.curr_prime;
  let max_prime = 0;
  do {
    if ((orig % curr_prime === 0)) {
      prime_factors.push(curr_prime)
      orig = orig / curr_prime;
    } else {
      curr_prime++;
    }

  } while (orig >= curr_prime)
  max_prime = Math.max.apply(null, prime_factors);
  return max_prime
}
// find palindrome numbers 
function largest_palindrome(params) {
  let product, product_reverse, a = params.a, b = params.b, palindrome = [], size = params.size, init_val = params.init_val, res;
  for (let i = init_val; i < size; i++) {
    do {
      product = a * b;
      product = product + "";
      product_reverse = product.split("").reverse().join("");
      if (product === product_reverse) {
        palindrome.push(product)
      }
      b++;
    } while (b < size)
    a++;
    b = init_val;
    console.log(b);
  }

  res = Math.max.apply(null, palindrome)

  console.log(palindrome)
  return res;
}
// find smallest multiple
function smallest_multiple(params) {
  let a = params.a, size = params.size,
    init_val = params.init_val, divisible = [], not_divisible = [];
  do {
    divisible = [], not_divisible = []
    for (let i = init_val; i <= size; i++) {
      if (a % i === 0) {
        divisible.push(a)
      } else {
        not_divisible.push(a);
      }
    }
    a++;
  } while (not_divisible.length > 0)

  return divisible[0]
}
//sum square difference
function sum_square_difference(params) {
  let a = params.a, b = params.b, sum_of_squares = 0, square_of_sums = 0,
    init_val = params.init_val, size = params.size;
  for (let i = init_val; i <= size; i++) {
    sum_of_squares += Math.pow(i, 2);
    square_of_sums += i;
  }
  square_of_sums = Math.pow(square_of_sums, 2);
  return square_of_sums - sum_of_squares;
}
// get prime numbers
function get_10001st_prime(params) {
  let prime_factors = [];
  let curr_number = params.init_val;
  let max_prime = 0, size = params.size;
  do {
    if (is_prime(curr_number)) {
      prime_factors.push(curr_number)
    }
    curr_number++;
  } while (prime_factors.length < size)
  max_prime = Math.max.apply(null, prime_factors);
  return max_prime
}
//largest product in a series
function largest_products_series(params) {
  let size = params.size, greatest_product = 0, current_product = 0;
  for (let i = 0; i < series.length; i++) {
    sub_str = series.substr(i, size);
    current_product = sub_str.split("").reduce((a, b) => a * b, 1);
    if (current_product > greatest_product) {
      greatest_product = current_product;
    }
  }
  return greatest_product;
}
//Pythagorean triplet 
function pythagorean_triplet(params) {
  for (let a = 1; a < params.size - 1; a++) {
    for (let b = a; b < params.size; b++) {
      c = Math.sqrt(a * a + b * b);
      if (c % 1 === 0) {
        if(a < b < c) {
          if (a + b + c === 1000){
            console.log(a, b, c);
            return a * b * c;
          }
        }
      }
    }
  }
  
}
//summation of primes
function sum_of_primes(params) {
  let sum = 0;
  let curr_number = params.init_val;
  let max_prime = 0, size = params.size;
  do {
    if (is_prime(curr_number)) {
      sum += curr_number;
    }
    curr_number++;
  } while (curr_number < size)
  return sum;
}
//is balanced
// Complete the isBalanced function below.
function isBalanced(params) {
  let s = params.s;
  for (let i = 0; i < params.s.length; i++) {
    if(s.includes("()")) {
      s = s.replace("()", "");
    }
    if(s.includes("[]")) {
      s = s.replace("[]", "");
    }
    if(s.includes("{}")) {
      s = s.replace("{}", "");
    } 
  }
  if(s.length > 0) {
    return "NO"
  } else {
    return "YES"
  }


}

function generalizedGCD(num, arr) {
  // Use spread syntax to get minimum of array
  const lowest = Math.min(...arr);

  for (let factor = lowest; factor > 1; factor--) {
      let isCommonDivisor = true;

      for (let j = 0; j < num; j++) {
          if (arr[j] % factor !== 0) {
              isCommonDivisor = false;
              break;
          }
      }

      if (isCommonDivisor) {
          return factor;
      }
  }

  return 1;
}



