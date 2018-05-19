import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import CommentFormContainer from './CommentFormContainer';


const App = () => {
  return (
    <div className="App">
    	<p className={"appTitle"}>The Comments Manager</p>
    	<CommentFormContainer/>
        <CommentsListContainer/>
    </div>
  );
};

export default App;