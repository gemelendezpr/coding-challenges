/*

### Coding Section Practice Overview: JavaScript for CRM Interview Preparation  

This coding session is tailored for candidates preparing for a CRM (Customer Relationship Management) interview, focusing on JavaScript challenges that test algorithms, data structures, and problem-solving skills. The session emphasizes practical exercises relevant to CRM systems, such as handling large datasets, implementing workflows, and optimizing performance.  

#### **Session Structure**  
1. **Concepts Refresher (15 minutes)**  
   - **CRM Context-Specific JavaScript Skills**:  
     - Handling JSON data efficiently.  
     - Writing modular, reusable functions to support workflows.  
     - Basics of API handling (GET/POST operations).  
   - **Key Data Structures**:  
     - Arrays and Objects for managing customer records.  
     - Maps and Sets for unique customer attributes.  
     - Queues and Stacks for process automation.  

2. **Foundational Exercises (20 minutes)**  
   Hands-on challenges to strengthen core JavaScript skills:  
   - Parse, filter, and sort customer data from a JSON array.  
   - Write a function to deduplicate customer records.  
   - Implement a system to track customer activity using a queue.  

3. **Algorithm Challenges (40 minutes)**  
   CRM-focused algorithm problems:  
   - **Searching and Filtering**:  
     Write a function to find customers with overdue invoices using binary search on a sorted dataset.  
   - **Recommendation Logic**:  
     Build a function to generate product recommendations based on customer purchase history using a hash map.  
   - **Data Transformation**:  
     Transform customer data into a specific format for reporting (e.g., aggregating purchases by month).  
   - **Workflow Automation**:  
     Simulate an email notification workflow using recursion and queues.  

4. **Integration Challenge (20 minutes)**  
   A CRM-relevant, real-world task:  
   - Write a function to fetch data from a mock API and calculate key metrics like the total sales per region or average order value.  
   - Optimize the solution to handle large datasets efficiently using pagination or memoization.  

5. **Code Review & Optimization Discussion (15 minutes)**  
   - Review solutions for maintainability, scalability, and performance.  
   - Explore alternative methods to solve the challenges.  
   - Discuss best practices for writing clean and modular code in CRM development.  

#### **Key Outcomes**  
- Strengthen algorithm and data structure knowledge in a CRM-specific context.  
- Gain practical experience with JavaScript tasks relevant to CRM systems.  
- Learn to optimize solutions for large-scale data handling and workflow automation.  
- Build confidence in tackling real-world CRM coding challenges during interviews.  

Participants are encouraged to engage actively, ask questions, and share their thought processes for collaborative learning. */

// <<< ---------------------------------------------------------------------- Concepts Refresher ---------------------------------------------------------------------- >>>
// - **CRM Context-Specific JavaScript Skills**:  
/* =========== *
* Challenge 1  * 
* ============ */
//  1. **Sort an Array of Customer Objects by Name**

function sortCustomersByName(customers) {
  // Sorting customers by their 'name' property using brute force
  for (let i = 0; i < customers.length - 1; i++) { 
    for (let j = i + 1; j < customers.length; j++) { 
      // If the current customer's name comes later alphabetically, swap them
      if (customers[i].name > customers[j].name) {
        let temp = customers[i];
        customers[i] = customers[j];
        customers[j] = temp;
      }
    }
  }
  return customers; // Return the sorted array
}

const customers = [
  { name: "Charlie", age: 35 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 28 },
];
console.log(sortCustomersByName(customers));


// # Big-O Complexity:
// - **Time Complexity**: \(O(n^2)\), where \(n\) is the number of customers. Each pair is compared.  
// - **Space Complexity**: \(O(1)\), as no extra space is used.
// - **Improvement**: Use `Array.prototype.sort()`, which typically has \(O(n \log n)\) complexity.

/* =========== *
* Challenge 2  * 
* ============ */
//  2. **Count the Number of Customers in Each Region**

function countCustomersByRegion(customers2) {
  const regionCounts = {}; // Object to store counts for each region

  // Loop through all customers2
  for (let customer of customers2) {
    const region = customer.region; // Get customer's region

    // Increment count for this region or initialize it to 1
    if (regionCounts[region]) {
      regionCounts[region]++;
    } else {
      regionCounts[region] = 1;
    }
  }
  return regionCounts; // Return the region counts
}

const customers2 = [
  { name: "Alice", region: "North" },
  { name: "Bob", region: "South" },
  { name: "Charlie", region: "North" },
];
console.log(countCustomersByRegion(customers2));


// # Big-O Complexity:
// - **Time Complexity**: \(O(n)\), as we iterate through the array once.
// - **Space Complexity**: \(O(r)\), where \(r\) is the number of regions.

/* =========== *
* Challenge 3  * 
* ============ */
//  3. **Fetch Customer Data and Return Only Active Customers**

function getActiveCustomers(customers3) {
  const activeCustomers = []; // Array to store active customers3

  // Loop through all customers3
  for (let customer of customers3) {
    if (customer.isActive) { // Check if the customer is active
      activeCustomers.push(customer); // Add active customer to the result
    }
  }
  return activeCustomers; // Return the array of active customers3
}

const customers3 = [
  { name: "Alice", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Charlie", isActive: true },
];
console.log(getActiveCustomers(customers3));


// # Big-O Complexity:
// - **Time Complexity**: \(O(n)\), as each customer is checked once.
// - **Space Complexity**: \(O(a)\), where \(a\) is the number of active customers.

/* =========== *
* Challenge 4  * 
* ============ */
//  4. **Find the Youngest Customer in a Dataset**

function findYoungestCustomer(customers4) {
  let youngest = customers4[0]; // Assume the first customer is the youngest

  // Loop through the remaining customers4
  for (let i = 1; i < customers4.length; i++) {
    if (customers4[i].age < youngest.age) { // Compare ages
      youngest = customers4[i]; // Update youngest customer
    }
  }
  return youngest; // Return the youngest customer
}

const customers4 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];
console.log(findYoungestCustomer(customers4));


// # Big-O Complexity:
// - **Time Complexity**: \(O(n)\), as we traverse the list once.
// - **Space Complexity**: \(O(1)\), no extra space needed.

/* =========== *
* Challenge 5  * 
* ============ */
//  5. **Count Unique Regions from a Dataset**

function countUniqueRegions(customers5) {
  const regions = new Set(); // Set to store unique regions

  // Loop through all customers5
  for (let customer of customers5) {
    regions.add(customer.region); // Add region to the set
  }
  return regions.size; // Return the count of unique regions
}

const customers5 = [
  { name: "Alice", region: "North" },
  { name: "Bob", region: "South" },
  { name: "Charlie", region: "North" },
];
console.log(countUniqueRegions(customers5));


// # Big-O Complexity:
// - **Time Complexity**: \(O(n)\), as we loop through all customers.
// - **Space Complexity**: \(O(r)\), where \(r\) is the number of unique regions.

/* =========== *
* Challenge 6  * 
* ============ */
//  6. **Implement a Queue for Processing Customer Support Tickets**

class Queue {
  constructor() {
    this.items = []; // Array to hold queue elements
  }

  enqueue(item) {
    this.items.push(item); // Add item to the end of the queue
  }

  dequeue() {
    return this.items.shift(); // Remove and return the first item
  }

  size() {
    return this.items.length; // Return the number of items in the queue
  }
}

const queue = new Queue();
queue.enqueue("Ticket 1");
queue.enqueue("Ticket 2");
console.log(queue.dequeue()); // "Ticket 1"
console.log(queue.size());    // 1


// #### Big-O Complexity:
// - **Enqueue**: \(O(1)\), as we append to the array.
// - **Dequeue**: \(O(n)\), as all elements are shifted after removing the first.
// - **Improvement**: Use a linked list to achieve \(O(1)\) dequeue complexity.