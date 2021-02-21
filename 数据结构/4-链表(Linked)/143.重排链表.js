/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head) return null;
  // return list(head);
  return merge(head);

  // 使用数组存放
  function list(head) {
    let list = [];
    // 遍历
    let curr = head;
    while (curr) {
      list.push(curr);
      curr = curr.next;
    }
    // 组装
    let left = 0;
    let right = list.length - 1;
    while (left < right) {
      let curr = list[left];
      let next = list[right];
      // 交换
      curr.next = next;
      left++;
      if (left === right) break;
      next.next = list[left];
      right--;
    }
    // 最后元素
    if (list[left]) {
      list[left].next = null;
    }
  }
  // 使用双指针+逆序+合并
  function merge(head) {
    // 1、使用快慢指针寻找到链表中点
    let l1 = head;
    let mid = findMid(l1);
    // 2、切断链表, 一分为二
    let l2 = mid.next;
    mid.next = null;
    // 3、逆序右侧部分
    l2 = reverse(l2);
    // 4、合并左右两部分
    mergeTwo(l1, l2);

    // 寻找到链表中点
    function findMid(head) {
      let fast = head;
      let slow = head;
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
      // slow即为中点
      return slow;
    }
    // 逆序链表
    function reverse(head) {
      let hair = new ListNode(0);
      let prev = null;
      let curr = head;
      while (curr) {
        let next = curr.next;
        hair.next = curr;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      return hair.next;
    }
    // 合并链表
    function mergeTwo(l1, l2) {
      while (l1 && l2) {
        let temp1 = l1.next;
        let temp2 = l2.next;
        // 将新节点挂到原节点下
        l1.next = l2;
        // 将原节点next挂到新节点next下
        l2.next = temp1;
        // 下一轮
        l1 = temp1;
        l2 = temp2;
      }
    }
  }
};
// @lc code=end
