# Implementing Linked List

## What is a linked a list

A linked list is a **linear** data structure that consists of a **sequence of elements** often called **nodes** where each node holds tow pieces of information a **value** and a **reference** or pointer to the next node in the sequence. The first node is called the **head** and the last node is named the **tail** which also holds a pointer to **NULL**.

In Javasript, there is no built in linked list data structure, but we can represent it this way:

`code`

const linkedList = {
value:foo,
next:{
value:bar,
next:{
value:baz,
naxt:{
value: someValue,
next:null
}
}
}
}

`code`

## The big O of a linked list

- **Insertion**: Inserting at some specified index ===> O(n).
- **Appending**: Appending an element to the end of the list take constant time ===> O(1).
- **Prepending**: Prependingan element to the beginning of the list take constant time ===> O(1).
- **Removing** : Removing a node from a specified index ===> O(n).
  -- **Lookup** : Lookup and search also take n time ===> O(n).
