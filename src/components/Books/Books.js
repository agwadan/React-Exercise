import React from 'react';
import Book from './Book';

const grandTour = {
	title : "Jeremy Clarkson"
}

function Books(pips) {

	return (
		<div>
			<Book title='Jeremy Clarkson'/>
			<Book title='Richard Hammond'/>
			<Book title='James May'/>
		</div>
	);
}

export default Books;