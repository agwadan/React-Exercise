import React from 'react';
import Book from './Book';

const grandTour = {
	title: "Jeremy Clarkson",
	imgUrl: "logo192.png"
}

function Books(pips) {

	return (
		<div>
			<Book title='Jeremy Clarkson' origin='Doncaster' img={grandTour.imgUrl} />
			<Book title='Richard Hammond' origin='Birmingham'>
				<p>He is a short man.</p>
			</Book>
			<Book title='James May' origin='some place I do not  know' />
		</div>
	);
}

export default Books;