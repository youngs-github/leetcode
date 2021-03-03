/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    // 双向链表(存储相对关系, 可以控制相对前后位置)
    // Map(存储key+节点信息)
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.limit = capacity;
    this.entries = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    // 查询到的元素要放置于尾部
    // 如果头结点===尾节点, 只有一个元素, 此时直接返回
    // 如果头结点!==尾节点, 并且访问的是头结点, 将头结点拼接到尾节点上
    // 访问的是头结点...节点...尾节点, 将节点拼接到尾节点上
    if (this.entries.has(key)) {
        // 节点
        let node = this.entries.get(key);
        // 节点数大于等于2
        if (this.head !== this.tail) {
            // 访问的是头结点
            // 旧尾节点
            let tail = this.tail;
            if (this.head === node) {
                // 更换头结点
                this.head = node.next;
            } else {
                // head...node...tail节点
                // 关联前后节点
                let prev = node.prev;
                let next = node.next;
                prev.next = next;
                next.prev = prev;
            }
            // 更换尾节点
            tail.next = node;
            this.tail = node;
            // 前后指针
            node.prev = tail;
            node.next = null;
        }
        return node.val;
    } else {
        return -1;
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // 如果存在该节点, 移到尾部
    // 如果不存在, 根据size判断是否需要删除
    if (this.entries.has(key)) {
        // 调整
        this.get(key);
        // 更新
        this.entries.get(key).val = value;
    } else {
        // 新增
        let node = {
            key,
            val: value,
            prev: null,
            next: null
        };
        if (this.size === this.limit) {
            // 需要移除
            if (this.head !== this.tail) {
                // 存在多个节点
                let head = this.head;
                this.head = head.next;
                this.head.prev = null;
                head.next = null;
            }
            this.entries.delete(this.head.key);
        } else {
            // size
            this.size++;
        }
        // 拼接
        if (this.head === this.tail) {
            // 只有一个节点
            this.head = this.tail = node;
        } else {
            // 拼接到尾部上
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        // entry
        this.entries.set(key, node);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// test
let lRUCache = new LRUCache(2);
lRUCache.put(1, 1);
lRUCache.put(2, 2);
console.log(lRUCache.get(1));
lRUCache.put(3, 3);
console.log(lRUCache.get(2));
lRUCache.put(4, 4);
console.log(lRUCache.get(1));
console.log(lRUCache.get(3));
console.log(lRUCache.get(4));
