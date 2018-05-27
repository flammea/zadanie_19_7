import React from 'react';
import addComment from './Comment';


const CommentForm = ({ text }) => {
  let commentText = "";
  return (
    <section className={'formBox'}>
	    <form
	      className="inputForm"
	      onSubmit={(event) => {
	        event.preventDefault();
	        text(commentText)
	      }}>
		    <input
		       className="inputText"
		       placeholder="Add new comment"
		       onChange={(e) => (commentText = e.target.value)}/>
			<button>
				<i className={"fas fa-angle-double-right"}></i>
			</button>    
		</form>
	</section>
  );
};
  
export default CommentForm;
