function containsDuplicate_idea1(nums: number[]): boolean {
  const found = new Set<number>();

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (found.has(element)) return true;

    found.add(element);
  }

  return false;
}

function containsDuplicate_idea2(nums: number[]): boolean {
  return new Set<number>(nums).size < nums.length;
}

console.log(containsDuplicate_idea1([1, 2, 3, 4, 5]));
console.log(containsDuplicate_idea1([1, 2, 3, 4, 4, 5]));

console.log(containsDuplicate_idea2([1, 2, 3, 4, 5]));
console.log(containsDuplicate_idea2([1, 2, 3, 4, 4, 5]));

console.log("// ------------");
console.log("// ------------");

function isAnagram_idea1(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const splitS = s.split("").sort();
  const splitT = t.split("").sort();

  return splitS.every((value, index) => value === splitT[index]);
}

function isAnagram_idea2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  return [...s].sort().join() == [...t].sort().join();
}

console.log(isAnagram_idea1("anagram", "nagaram"));
console.log(isAnagram_idea1("rat", "car"));

console.log(isAnagram_idea2("anagram", "nagaram"));
console.log(isAnagram_idea2("rat", "car"));

console.log("// ------------");
console.log("// ------------");

async function twoSum_idea1(nums: number[], target: number): Promise<number[]> {
  const sorted = nums.sort((a, b) => a - b);
  let leftIndex = 0;
  let rightIndex = 1;

  let test = true;

  while (test) {
    let left = sorted[leftIndex];
    let right = sorted[rightIndex];

    console.log(left);
    console.log(right);

    const result = left + right;

    if (result === target) {
      return [nums.indexOf(left), nums.indexOf(right)];
    }

    if (result < target) {
      if(rightIndex) {
        rightIndex += 1;

      }
    } else {
      // leftIndex += 1;
      // rightIndex = rightIndex + 1;
    }

    await delay(1000);
    console.log("----");

    // test = false;
  }

  return [];
}

function delay(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// console.log(twoSum_idea1([2, 7, 11, 15], 9)); // 0, 1: nums[0] + nums[1] == 9
// console.log(twoSum_idea1([3, 2, 4], 6)); // 1, 2
console.log(twoSum_idea1([1, 2, 3, 5], 5)); // 1, 2
