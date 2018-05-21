import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import CommentFormContainer from './CommentFormContainer';
import DevTools from './DevTools';


const App = () => {
  return (
    <div className="App">
    	<p className={"appTitle"}>The Comments Manager</p>
    	<CommentFormContainer/>
        <CommentsListContainer/>
        <DevTools />
    </div>
  );
};

export default App;