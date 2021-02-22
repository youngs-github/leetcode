/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  // 使用分治法
  // 单次合并两个
  // 时间复杂度O(N*K*logK)
  // 空间复杂度O(logK)
  while (lists.length > 1) {
    let l1 = lists.shift();
    let l2 = lists.shift();
    // 结果
    lists.push(merge(l1, l2));
  }
  return lists[0] || null;

  // 辅助方法
  // 合并链表
  function merge(l1, l2) {
    let head = new ListNode();
    let curr = head;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        curr.next = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        l2 = l2.next;
      }
      curr = curr.next;
    }
    if (l1) {
      curr.next = l1;
    }
    if (l2) {
      curr.next = l2;
    }
    return head.next;
  }
};
// @lc code=end
