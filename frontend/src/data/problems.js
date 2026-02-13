export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: [
        "You must do this by modifying the input array in-place with O(1) extra memory.",
      ],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: [
        "Given a string s, return true if it is a palindrome, or false otherwise.",
      ],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 2 * 10⁵",
      "s consists only of printable ASCII characters",
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Given two strings s and t, return true if t is an anagram of s, otherwise return false.",
      notes: [
        "An anagram is formed by rearranging the letters of another word.",
        "Both strings contain only lowercase English letters.",
      ],
    },
    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: "true",
      },
      {
        input: 's = "rat", t = "car"',
        output: "false",
      },
    ],
    constraints: [
      "1 ≤ s.length, t.length ≤ 5 * 10⁴",
      "s and t consist of lowercase English letters",
    ],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here
  
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false`,
      python: `def isAnagram(s, t):
    # Write your solution here
    pass

print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))  # Expected: False`,
      java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram")); // Expected: true
        System.out.println(isAnagram("rat", "car")); // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "merge-sorted-array": {
    id: "merge-sorted-array",
    title: "Merge Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "You are given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.",
      notes: [
        "nums1 has enough space to hold additional elements.",
        "Modify nums1 in-place.",
      ],
    },
    examples: [
      {
        input: "nums1 = [1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3",
        output: "[1,2,2,3,5,6]",
      },
    ],
    constraints: ["0 ≤ m, n ≤ 200", "-10⁹ ≤ nums1[i], nums2[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function merge(nums1, m, nums2, n) {
  // Write your solution here
}

// Test case
let a = [1,2,3,0,0,0];
merge(a,3,[2,5,6],3);
console.log(a); // Expected: [1,2,2,3,5,6]`,
      python: `def merge(nums1, m, nums2, n):
    # Write your solution here
    pass

a = [1,2,3,0,0,0]
merge(a,3,[2,5,6],3)
print(a)`,
      java: `import java.util.Arrays;

class Solution {
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        // Write your solution here
    }

    public static void main(String[] args) {
        int[] a = {1,2,3,0,0,0};
        merge(a,3,new int[]{2,5,6},3);
        System.out.println(Arrays.toString(a)); // Expected: [1,2,2,3,5,6]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2,2,3,5,6]",
      python: "[1, 2, 2, 3, 5, 6]",
      java: "[1, 2, 2, 3, 5, 6]",
    },
  },

  "maximum-depth-binary-tree": {
    id: "maximum-depth-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: "Given the root of a binary tree, return its maximum depth.",
      notes: [
        "The maximum depth is the number of nodes along the longest path from root to leaf.",
        "You may solve using recursion or iteration.",
      ],
    },
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "3",
      },
    ],
    constraints: ["0 ≤ number of nodes ≤ 10⁴", "-100 ≤ Node.val ≤ 100"],
    starterCode: {
      javascript: `function maxDepth(root) {
  // Write your solution here
}

// Test case
console.log(maxDepth([3,9,20,null,null,15,7])); // Expected: 3`,
      python: `def maxDepth(root):
    # Write your solution here
    pass

print(maxDepth([3,9,20,None,None,15,7]))`,
      java: `class Solution {
    public static int maxDepth(Integer[] root) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxDepth(new Integer[]{3,9,20,null,null,15,7})); // Expected: 3
    }
}`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Set",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice.",
      notes: ["Return false if every element is distinct."],
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    pass

print(containsDuplicate([1,2,3,1]))
print(containsDuplicate([1,2,3,4]))`,
      java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1})); // Expected: true
        System.out.println(containsDuplicate(new int[]{1,2,3,4})); // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  "longest-substring-without-repeating": {
    id: "longest-substring-without-repeating",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [
        "A substring is a contiguous sequence of characters.",
        "Characters must not repeat within the substring.",
        "Return the length of the longest such substring.",
      ],
    },
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with length 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
      },
    ],
    constraints: [
      "0 ≤ s.length ≤ 5 * 10⁴",
      "s consists of English letters, digits, symbols and spaces",
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))  # Expected: 1`,
      java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n1",
      python: "3\n1",
      java: "3\n1",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all elements except nums[i].",
      notes: [
        "Do not use division.",
        "Solve in O(n) time complexity.",
        "Use constant extra space (excluding output array).",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
      },
      {
        input: "nums = [-1,1,0,-3,3]",
        output: "[0,0,9,0,0]",
      },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵", "-30 ≤ nums[i] ≤ 30"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
}

// Test cases
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

print(productExceptSelf([1,2,3,4]))  
print(productExceptSelf([-1,1,0,-3,3]))`,
      java: `import java.util.Arrays;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        return new int[nums.length];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4})));
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3})));
    }
}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]\n[0,0,9,0,0]",
      python: "[24,12,8,6]\n[0,0,9,0,0]",
      java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
    },
  },

  "number-of-islands": {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Graph • DFS/BFS",
    description: {
      text: "Given a 2D grid of '1's (land) and '0's (water), return the number of islands.",
      notes: [
        "An island is surrounded by water.",
        "Connected horizontally or vertically.",
        "You may modify the grid.",
      ],
    },
    examples: [
      {
        input: 'grid = [["1","1","0"],["1","0","0"],["0","0","1"]]',
        output: "2",
      },
    ],
    constraints: ["1 ≤ m, n ≤ 300", "grid[i][j] is '0' or '1'"],
    starterCode: {
      javascript: `function numIslands(grid) {
  // Write your solution here
}

// Test case
console.log(numIslands([
["1","1","0"],
["1","0","0"],
["0","0","1"]
])); // Expected: 2`,
      python: `def numIslands(grid):
    # Write your solution here
    pass

print(numIslands([
["1","1","0"],
["1","0","0"],
["0","0","1"]
]))`,
      java: `class Solution {
    public static int numIslands(char[][] grid) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        char[][] grid = {
            {'1','1','0'},
            {'1','0','0'},
            {'0','0','1'}
        };
        System.out.println(numIslands(grid)); // Expected: 2
    }
}`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },

  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: {
      text: "You are given coins of different denominations and a total amount.",
      notes: [
        "Return the fewest number of coins needed to make the amount.",
        "If not possible, return -1.",
        "You have unlimited coins of each type.",
      ],
    },
    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
        explanation: "11 = 5 + 5 + 1",
      },
      {
        input: "coins = [2], amount = 3",
        output: "-1",
      },
    ],
    constraints: ["1 ≤ coins.length ≤ 12", "1 ≤ amount ≤ 10⁴"],
    starterCode: {
      javascript: `function coinChange(coins, amount) {
  // Write your solution here
}

// Test cases
console.log(coinChange([1,2,5], 11)); // Expected: 3
console.log(coinChange([2], 3)); // Expected: -1`,
      python: `def coinChange(coins, amount):
    # Write your solution here
    pass

print(coinChange([1,2,5], 11))
print(coinChange([2], 3))`,
      java: `class Solution {
    public static int coinChange(int[] coins, int amount) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1,2,5}, 11)); // Expected: 3
        System.out.println(coinChange(new int[]{2}, 3)); // Expected: -1
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n-1",
      python: "3\n-1",
      java: "3\n-1",
    },
  },

  "median-of-two-sorted-arrays": {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Array • Binary Search",
    description: {
      text: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
      notes: [
        "The overall run time complexity should be O(log (m+n)).",
        "Arrays may have different sizes.",
        "Median is the middle value after merging both arrays.",
      ],
    },
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.0",
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.5",
      },
    ],
    constraints: [
      "0 ≤ m, n ≤ 1000",
      "1 ≤ m + n ≤ 2000",
      "-10⁶ ≤ nums1[i], nums2[i] ≤ 10⁶",
    ],
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Write your solution here
}

// Test cases
console.log(findMedianSortedArrays([1,3],[2])); // Expected: 2
console.log(findMedianSortedArrays([1,2],[3,4])); // Expected: 2.5`,
      python: `def findMedianSortedArrays(nums1, nums2):
    # Write your solution here
    pass

print(findMedianSortedArrays([1,3],[2]))
print(findMedianSortedArrays([1,2],[3,4]))`,
      java: `class Solution {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(findMedianSortedArrays(new int[]{1,3}, new int[]{2}));
        System.out.println(findMedianSortedArrays(new int[]{1,2}, new int[]{3,4}));
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n2.5",
      python: "2\n2.5",
      java: "2.0\n2.5",
    },
  },

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers",
    description: {
      text: "Given n non-negative integers representing elevation map heights, compute how much water it can trap after raining.",
      notes: [
        "Each bar width is 1.",
        "Water trapped depends on max height on both sides.",
      ],
    },
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
      },
      {
        input: "height = [4,2,0,3,2,5]",
        output: "9",
      },
    ],
    constraints: ["1 ≤ n ≤ 2 * 10⁴", "0 ≤ height[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function trap(height) {
  // Write your solution here
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5])); // Expected: 9`,
      python: `def trap(height):
    # Write your solution here
    pass

print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
print(trap([4,2,0,3,2,5]))`,
      java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1}));
        System.out.println(trap(new int[]{4,2,0,3,2,5}));
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n9",
      python: "6\n9",
      java: "6\n9",
    },
  },

  "longest-valid-parentheses": {
    id: "longest-valid-parentheses",
    title: "Longest Valid Parentheses",
    difficulty: "Hard",
    category: "Stack • DP",
    description: {
      text: "Given a string containing just '(' and ')', return the length of the longest valid parentheses substring.",
      notes: [
        "Substring must be well-formed.",
        "Solve using stack or DP approach.",
      ],
    },
    examples: [
      {
        input: 's = "(()"',
        output: "2",
      },
      {
        input: 's = ")()())"',
        output: "4",
      },
    ],
    constraints: ["0 ≤ s.length ≤ 3 * 10⁴", "s[i] is '(' or ')'"],
    starterCode: {
      javascript: `function longestValidParentheses(s) {
  // Write your solution here
}

console.log(longestValidParentheses("(()")); // Expected: 2
console.log(longestValidParentheses(")()())")); // Expected: 4`,
      python: `def longestValidParentheses(s):
    # Write your solution here
    pass

print(longestValidParentheses("(()"))
print(longestValidParentheses(")()())"))`,
      java: `class Solution {
    public static int longestValidParentheses(String s) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(longestValidParentheses("(()"));
        System.out.println(longestValidParentheses(")()())"));
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n4",
      python: "2\n4",
      java: "2\n4",
    },
  },

  "word-ladder": {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    category: "Graph • BFS",
    description: {
      text: "Given two words beginWord and endWord, and a dictionary wordList, return the length of shortest transformation sequence.",
      notes: [
        "Only one letter can change at a time.",
        "Each transformed word must exist in wordList.",
        "Return 0 if impossible.",
      ],
    },
    examples: [
      {
        input:
          'begin="hit", end="cog", list=["hot","dot","dog","lot","log","cog"]',
        output: "5",
        explanation: "hit -> hot -> dot -> dog -> cog",
      },
      {
        input: 'begin="hit", end="cog", list=["hot","dot","dog","lot","log"]',
        output: "0",
      },
    ],
    constraints: [
      "1 ≤ wordList.length ≤ 5000",
      "All words have same length",
      "beginWord != endWord",
    ],
    starterCode: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {
  // Write your solution here
}

console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"])); // Expected: 5
console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log"])); // Expected: 0`,
      python: `def ladderLength(beginWord, endWord, wordList):
    # Write your solution here
    pass

print(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]))
print(ladderLength("hit","cog",["hot","dot","dog","lot","log"]))`,
      java: `class Solution {
    public static int ladderLength(String beginWord, String endWord, String[] wordList) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(ladderLength("hit","cog",new String[]{"hot","dot","dog","lot","log","cog"}));
        System.out.println(ladderLength("hit","cog",new String[]{"hot","dot","dog","lot","log"}));
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};
