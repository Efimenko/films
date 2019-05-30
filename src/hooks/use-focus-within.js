import {useEffect} from 'react'
import {debounce} from '../utilities'

const useFocusWithin = (nodeRef, callback) => {
  useEffect(() => {
    let debounced = debounce(0, callback);

    const handleFocusIn = event => {
      if (!nodeRef.current.contains(event.target)) {
        return;
      }
      debounced(true);
    };

    const handleFocusOut = event => {
      if (!nodeRef.current.contains(event.target)) {
        return;
      }
      debounced(false);
    };

    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);

    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, [nodeRef, callback]);
};

export default useFocusWithin