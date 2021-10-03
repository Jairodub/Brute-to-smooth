def maximum_sub_array (nums):
    for i in range(len(nums)):
        if i==0: local_max = max_sum = nums[0]
        local_max = max(nums[i], local_max + nums[i])
        max_sum = max(max_sum, local_max)
    return max_sum
def max (a,b):
    if a<b: return b
    else: return a
