import { useState, useMemo, useCallback } from "react";
import {debounce} from '../utilities'

const useMemoFunction = (...deps) =>
  useMemo(() => {
    const [fn, ...args] = deps;
    return fn(...args);
  }, deps);

const partial = (fn, ...partialArgs) => (...args) => fn(...partialArgs, ...args)

const useDebouncedState = (initialState, delay = 0) => {
  const [state, setState] = useState(initialState)
  const setStateDebounced = useMemoFunction(debounce, delay, setState)
  return [state, setStateDebounced]
}

const useFocusWithin = (nodeRef, callback) => {
  const [focused, setFocused] = useDebouncedState(false)
  const onFocus = useCallback(() => setFocused(true), [setFocused])
  const onBlur = useCallback(() => setFocused(false), [setFocused])
  return {focused, onFocus, onBlur}
};

export default useFocusWithin