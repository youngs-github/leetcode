/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	// 从左往右进位
	let hair = new ListNode(0);
	let ans = hair;
	// 循环
	let rest = 0;
	while (l1 || l2 || rest > 0) {
		let n1 = l1 ? l1.val : 0;
		let n2 = l2 ? l2.val : 0;
		// 和
		let nn = rest + n1 + n2;
		ans.val = nn % 10;
		rest = Math.floor(nn / 10);
		// 节点右移
		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;
		// 下一节点
		if (l1 || l2 || rest > 0) {
			ans = ans.next = new ListNode(0);
		}
	}
	return hair;
};
// @lc code=end

