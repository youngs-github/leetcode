/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var sortList = function (head) {
    // 使用归并排序
    // 自顶向下实现O(N*logN)及O(logN)
    // 自底向上实现O(N*logN)及O(1)
    // 实现自顶向下
    // 分治思想, 依次一分为二进行排序
    // 左右两侧均排序完毕, 进行合并
    // 把左右两侧看做两个集合, 比较大小进行合并
    return sort(head, null);

    // 辅助方法
    function sort(head, tail) {
        if (!head) return null;
        if (head.next === tail) {
            head.next = null;
            return head;
        }
        // 取快慢指针
        let fast = head;
        let slow = head;
        while (fast !== tail) {
            fast = fast.next;
            if (fast !== tail) {
                fast = fast.next;
            }
            slow = slow.next;
        }
        // 中间点
        let mid = slow;
        return merge(sort(head, mid), sort(mid, tail));
    }
    // 辅助方法
    function merge(head1, head2) {
        const dummyHead = new ListNode(0);
        let temp = dummyHead,
            temp1 = head1,
            temp2 = head2;
        while (temp1 !== null && temp2 !== null) {
            if (temp1.val <= temp2.val) {
                temp.next = temp1;
                temp1 = temp1.next;
            } else {
                temp.next = temp2;
                temp2 = temp2.next;
            }
            temp = temp.next;
        }
        if (temp1 !== null) {
            temp.next = temp1;
        } else if (temp2 !== null) {
            temp.next = temp2;
        }
        return dummyHead.next;
    }
};
// @lc code=end
