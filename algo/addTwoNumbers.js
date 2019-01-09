/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function arrayToListNode(arr) {
  var node = new ListNode(arr[0]);
  var temp = node;
  for (var i = 1; i < arr.length; i++) {
    temp = temp.next = new ListNode(arr[i]);
  }

  return node;
}

// 方式 1
var addTwoNumbers = function (l1, l2) {
  var node = l1, value, addValue;
  while (node != null) {
    if (l2 === null) {
      l2 = new ListNode(0);
    }

    value = node.val + l2.val;
    node.val = value;

    if (node.next === null && l2.next !== null) {
      node.next = new ListNode(0);
    }

    if (value / 10 >= 1) {
      node.val = value % 10;

      if (node.next) {
        node.next.val = node.next.val + 1;
      } else {
        node.next = new ListNode(1);
      }
    }

    node = node.next;
    l2 = l2.next;
  }

  return l1;
};


var list = arrayToListNode([5]);
var list2 = arrayToListNode([5]);
var results = addTwoNumbers(list, list2)
console.log(JSON.stringify(results));
