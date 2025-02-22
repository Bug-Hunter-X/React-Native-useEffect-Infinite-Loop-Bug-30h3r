The solution involves correctly managing dependencies in the `useEffect` hook.  Instead of including the state variable in the dependency array, only include values that trigger changes outside the effect's scope.  To avoid unnecessary re-renders use the `useCallback` hook if the function inside useEffect is expensive.  Alternatively, conditionally re-render if the value has actually changed using the following snippet:

```javascript
const [count, setCount] = useState(0);
const prevCount = usePrevious(count);

useEffect(() => {
    if (prevCount !== count) {
      // Your code here
    }
  }, [count]); 

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => { 
    ref.current = value;
  }, [value]);
  return ref.current;
}
```

By removing the state variable from the dependencies or using `useCallback` hook or the `usePrevious` custom hook, the infinite loop is avoided.