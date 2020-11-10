import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGrid from "react-photo-feed";
import "react-photo-feed/library/style.css";

const demoPhotos = [
	{
		id : 1, src : "https://farm5.staticflickr.com/4077/34824083444_f5f050e31c_n.jpg",
		bigSrc : "https://farm5.staticflickr.com/4077/34824083444_f5f050e31c_b.jpg"
	},
	{
		id : 2, src : "https://farm5.staticflickr.com/4240/35527849422_25a0a67df6_n.jpg",
		bigSrc : "https://farm5.staticflickr.com/4240/35527849422_25a0a67df6_b.jpg"
	},
	{
		id : 3, src : "https://farm5.staticflickr.com/4077/34824083444_f5f050e31c_n.jpg",
		bigSrc : "https://farm5.staticflickr.com/4077/34824083444_f5f050e31c_b.jpg"
	},
	{
		id : 4, src : "https://farm5.staticflickr.com/4240/35527849422_25a0a67df6_n.jpg",
		bigSrc : "https://farm5.staticflickr.com/4240/35527849422_25a0a67df6_b.jpg"
	},
	{
		id : 5, src : "https://farm5.staticflickr.com/4077/34824083444_f5f050e31c_n.jpg",
		bigSrc : "https://farm5.staticflickr.com/4077/34824083444_f5f050e31c_b.jpg"
	},
	{
		id : 6, src : "https://farm5.staticflickr.com/4240/35527849422_25a0a67df6_n.jpg",
		bigSrc : "https://farm5.staticflickr.com/4240/35527849422_25a0a67df6_b.jpg"
	},
	{
		id : 7, src : "https://farm5.staticflickr.com/4077/34824083444_f5f050e31c_n.jpg",
		bigSrc : "https://farm5.staticflickr.com/4077/34824083444_f5f050e31c_b.jpg"
	}
];

ReactDOM.render(
 <div>
		<PhotoGrid columns={2} photos={demoPhotos} />
	</div>,
  document.getElementById('root')
);
