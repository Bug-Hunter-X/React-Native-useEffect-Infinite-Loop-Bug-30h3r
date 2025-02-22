# React Native useEffect Infinite Loop Bug

This repository demonstrates a common yet subtle bug in React Native applications involving the `useEffect` hook and its dependency array.  The bug causes an infinite loop due to improper dependency management, leading to performance issues and application crashes.

The `bug.js` file showcases the problematic code. The `bugSolution.js` file provides the corrected implementation.

This example highlights the importance of carefully managing dependencies within the `useEffect` hook to prevent unexpected behavior.  Always ensure that the dependencies accurately reflect the values that determine the effect's execution.