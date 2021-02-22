/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function (l1, l2) {
  // 定义根节点
  // 循环逐个判断
  let hair = new ListNode();
  let prev = hair;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      // l1更小
      // 将l1挂到前一节点上
      prev.next = l1;
      // 前一节点右移
      prev = l1;
      // l1右移
      l1 = l1.next;
    } else {
      // l2更小
      // 将l2挂到前一节点上
      prev.next = l2;
      // 前一节点右移
      prev = l2;
      // l2右移
      l2 = l2.next;
    }
  }
  // 有剩余
  if (l1) prev.next = l1;
  if (l2) prev.next = l2;
  return hair.next;
};
// @lc code=end
