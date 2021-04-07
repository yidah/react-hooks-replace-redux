// This file intends to be a global state management tool
// without Redux or Context just JavaScript, React and React hooks
import { useEffect, useState } from 'react';


let globalState ={};
let listeners =[];
let actions ={};

// custom hook
export const useStore =(shouldListen = true )=>{
    // only interested in the function to set the state
    const setState = useState(globalState)[1];

    // we should be able to dispatch actions
    const dispatch = (actionIdentifier, payload) =>{
        // actions will be functions that will receive global state and return a new state just like Redux
        const newState = actions[actionIdentifier](globalState, payload)
        
        globalState = {...globalState, ...newState};

        // this will update the sate 
        for (const listener of listeners){
            listener(globalState);
        }

    };

    // register our listeners
    useEffect(()=>{
        if(shouldListen){
            listeners.push(setState);
        }
        return ()=>{
            if(shouldListen){
                
                listeners = listeners.filter(li => li !== setState);
            }
        }

    }, [setState, shouldListen])

    // values returned from the custom hook
    return [globalState, dispatch]
};

// let user define some actions
export const initStore = (userActions, initialState)=>{
    if(initialState){
        // merge what we currently have in the global state with the 
        // inital state of this concrete instantiation 
        globalState = {...globalState, ...initialState};
    }

    actions = {...actions, ...userActions};
};