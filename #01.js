const twoSum = function(nums, target) {
  const map = {};
  for (let i = 0;i<nums.length;i++) {
      const s = target - nums[i];
      if (s in map) {
        return [map[s], i]
      } else {
        map[nums[i]] = i;
      }
  }
  return []
};
