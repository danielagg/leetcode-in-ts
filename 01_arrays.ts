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

  return s.split("").sort().join() == t.split("").sort().join();
}

console.log(isAnagram_idea1("anagram", "nagaram"));
console.log(isAnagram_idea1("rat", "car"));

console.log(isAnagram_idea2("anagram", "nagaram"));
console.log(isAnagram_idea2("rat", "car"));
