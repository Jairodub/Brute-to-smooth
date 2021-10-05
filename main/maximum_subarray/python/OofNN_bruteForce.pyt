def maximum_sub_array (nums):
    for i in range(len(nums)):
        if i==0: max_sum = current_max = nums[0]
        current_max = nums[i]
        for j in range (i+1, len(nums)):
            if nums[j]>maxSum: maxSum = nums[j]
            current_max =current_max + nums[j]
            if current_sum>max_max: max_sum=current_max
    return max_sum

