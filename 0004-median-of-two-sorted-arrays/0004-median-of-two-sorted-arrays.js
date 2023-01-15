function findMedianSortedArrays(nums1, nums2) {
    let m = nums1.length, n = nums2.length;
    let i = 0, j = 0, k = 0, merged = new Array(m + n);
    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            merged[k++] = nums1[i++];
        } else {
            merged[k++] = nums2[j++];
        }
    }
    while (i < m) {
        merged[k++] = nums1[i++];
    }
    while (j < n) {
        merged[k++] = nums2[j++];
    }
    if ((m + n) % 2 == 0) {
        return (merged[(m + n) / 2] + merged[(m + n) / 2 - 1]) / 2;
    } else {
        return merged[Math.floor((m + n) / 2)];
    }
}
