import React from 'react';
import thumbUpComment from './Comment';
import thumbDownComment from './Comment';
import removeComment from './Comment';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment }) =>
  <li className={"listItem"}>
  	<span className={'commentText'}>{text}
  		<button className={'btnDelete'} onClick={() => removeComment(id)}>
  			<i className={"far fa-trash-alt"}></i>
		</button>
  	</span>
  	<span className={'commentVotes'}>Votes: {votes}</span> 
   	<button className={'btnUp'} onClick={() => thumbUpComment(id)}>
    	<i className={"fas fa-thumbs-up"}></i>
	</button>
    <button className={'btnDown'} onClick={() => thumbDownComment(id)}>
    	<i className={"fas fa-thumbs-down"}></i>
	</button>
  </li>;

export default Comment;