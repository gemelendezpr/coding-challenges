//1. Challenge: Rotate List

// Given the head of a linked list, rotate the list to the right by k places.
// Example 1:  Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3] 
// Example 2: Input: head = [0,1,2], k = 4
// Output: [2,0,1] Constraints:

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
var rotateRight = function(head, k) {
    // If the linked list is empty or has only one node, or if k is 0, return the head as it is.
    if (!head || !head.next || k === 0) {
        return head;
    }
    
    // Count the number of nodes in the linked list.
    let count = 1;
    let current = head;
    while (current.next) {
        count++;
        current = current.next;
    }
    
    // Calculate the actual value of k taking modulo operation to handle large values of k.
    k = k % count;
    
    // If k is 0 after taking the modulo operation, the list remains unchanged, so return the head.
    if (k === 0) {
        return head;
    }
    
    // Calculate the number of steps to move to reach the new head after rotation.
    let stepsToNewHead = count - k;
    
    // Make the linked list circular by connecting the last node to the head.
    current.next = head;
    
    // Move 'current' pointer to the node just before the new head.
    for (let i = 0; i < stepsToNewHead; i++) {
        current = current.next;
    }
    
    // Set the new head and break the link to make it the last node.
    let newHead = current.next;
    current.next = null;
    
    // Return the new head of the rotated linked list.
    return newHead;

};

// Example 1
const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const k1 = 2;
console.log(rotateRight(head1, k1)); // Output: [4,5,1,2,3]

// Example 2
const head2 = new ListNode(0, new ListNode(1, new ListNode(2)));
const k2 = 4;
console.log(rotateRight(head2, k2)); // Output: [2,0,1]