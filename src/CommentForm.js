import React from 'react';
import addComment from './Comment';


const CommentForm = ({ text }) => {
  let commentText = "";
  return (
    <section className={'formBox'}>
	    <form
	      className="inputForm"
	      onSubmit={(event) => {
	        text(commentText);
	        event.preventDefault();
	      }}>
		    <input
		       className="inputText"
		       placeholder="Dodaj nowy komentarz"
		       onChange={(e) => (commentText = e.target.value)}/>
			<button>
				<i className={"fas fa-angle-double-right"}></i>
			</button>    
		</form>
	</section>
  );
};
  
export default CommentForm;
