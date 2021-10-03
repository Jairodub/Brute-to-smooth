def maximum_sub_array (nums):
    for i in range(len(nums)):
        if i==0: max_sum = current_sum = nums[0]
        current_sum = nums[i]
        for j in range (len(nums)):
            current_sum =current_sum + nums[j]
            if current_sum>max_sum: max_sum=current_sum
    return max_sum

