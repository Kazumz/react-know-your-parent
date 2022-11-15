import React from 'react';

/*
An example hook that consumes stable state from Redux but contains an unstable function reference.
The useEffect is unintentionally invoked due to the parent's cascading render causing this hook to re-evaluate causing a new function
to be created in useTriggerAnalytics which is included in the useEffect deps.
 */
export default function useExampleHook() {
    const triggerAnalytics = useTriggerAnalytics();
    
    // const firstStableExample = useSelector(state => state.first);
    // const secondStableExample = useSelector(state => state.second);

    // Our intention is to only fire this hook when the Redux state changes.
    React.useEffect(() => {
        triggerAnalytics();
    }, [
        triggerAnalytics,
        // firstStableExample,
        // secondStableExample,
    ])
}

function useTriggerAnalytics(){
    return () => {
        console.log(`Example analytics`)
    }
}