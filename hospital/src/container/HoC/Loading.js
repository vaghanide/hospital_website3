import React from 'react';

function Loading(Component) {
   return function withloadingcomponent({Loading}){
    if(Loading){
        return(
            <p>loading...</p>
        
        )
    } else{
        return(
            <Component />
        )
    }
   }
}

export default Loading;
