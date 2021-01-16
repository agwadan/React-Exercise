import React from 'react';
import Book from './Book';

const grandTour = {
	title : "Jeremy Clarkson"
}

function Books(pips) {

	return (
		<div>
			<Book title='Jeremy Clarkson' origin='Doncaster'/>
			<Book title='Richard Hammond' origin='Birmingham'/>
			<Book title='James May'origin='some place I do not  know'/>
		</div>
	);
}

export default Books;