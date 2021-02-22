/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let copy = new ListNode(0, head);
  let prev = copy;
  // 遍历
  while (true) {
    let count = 0;
    let temp = null;
    while (head) {
      temp = head;
      head = head.next;
      count++;
    }
    // 大于等于k个节点
    if (count >= k) {
      // 翻转
      // 翻转后的链表、翻转后链表的尾部、剩余链表
      let [reve, rehd, rest] = reverse(prev.next, k);
      prev.next = reve;
      rehd.next = rest;
      head = rest;
      prev = rehd;
    } else {
      break;
    }
  }
  return copy.next;
  // 辅助方法
  // 翻转链表
  function reverse(head, k) {
    let copy = new ListNode(0);
    // 双指针
    // 一个指向目标链表
    // 一个指向拷贝链表
    // 循环时, 将拷贝链表元素拼接到目标链表根部
    // 移动指针, 将目标链表指向最新插入节点
    // 移动指针, 将拷贝链表下移
    let l1 = null;
    let l2 = head;
    while (l2 && --k >= 0) {
      // 个数
      let temp = l2.next;
      // 插入到开头
      copy.next = l2;
      l2.next = l1;
      // 下一轮
      l1 = l2;
      l2 = temp;
    }
    return [copy.next, head, l2];
  }
};
// @lc code=end
