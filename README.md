# Linked Lists — 🌐 The Odin Project

This is my implementation of the “Linked Lists” project from The Odin Project’s JavaScript curriculum.  
It defines a singly-linked list data structure, along with common list operations.

## 📚 Overview

A linked list is a linear collection of data elements (nodes), where each node points to the next node in the list.  
While JavaScript arrays offer built-in dynamic sizing and indexed access, building a linked list manually provides a strong foundation in data structures and helps understand how lists, pointers, and node-based data structures work. :contentReference[oaicite:1]{index=1}

## 🧱 Implementation

### Classes / Factories

- `Node`  
  - Has a `value` property  
  - Has a `nextNode` property (initially `null`)

- `LinkedList`  
  - Represents the full list  

### Methods

Your `LinkedList` class (or factory) implements the following methods: :contentReference[oaicite:2]{index=2}

| Method | Description |
|--------|-------------|
| `append(value)` | Adds a new node with the given `value` to the **end** of the list. |
| `prepend(value)` | Adds a new node with the given `value` to the **start** of the list. |
| `size()` | Returns the total number of nodes in the list. |
| `head()` | Returns the first node in the list. |
| `tail()` | Returns the last node in the list. |
| `at(index)` | Returns the node at the given zero-based `index`. |
| `pop()` | Removes the last element from the list. |
| `contains(value)` | Returns `true` if a node with the given `value` exists in the list, otherwise `false`. |
| `find(value)` | Returns the index of the node containing the given `value`, or `null` if not found. |
| `toString()` | Returns a string representation of the list in the format: `( value ) -> ( value ) -> ... -> null`. |


> 💡 When inserting or removing nodes, make sure to properly update the `nextNode` references of surrounding nodes.

## 🧪 Example Usage

```js
import { LinkedList } from './LinkedList.js';  // or require, depending on setup

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
// Output:
// ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
```
