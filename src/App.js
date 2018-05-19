import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import CommentFormContainer from './CommentFormContainer';


const App = () => {
  return (
    <div className="App">
    	<CommentFormContainer/>
        <p>Lista komentarzy</p>
        <CommentsListContainer/>
    </div>
  );
};

export default App;