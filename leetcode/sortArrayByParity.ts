function sortArrayByParity(nums: number[]): number[] {
    let rs = [];
    nums.forEach(w => {
        if (w % 2 == 0) rs.unshift(w);
        else rs.push(w);
    })
    return rs;
};
