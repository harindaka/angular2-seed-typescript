import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface IBook {
	bookId: number;
	title: string;
	author: string;
	price: number;
	imageUrl: string;
}

@Injectable()
export class BooksService{
	
	private mockBooksList: Array<IBook> =  [
			{
				bookId: 1,
				title: "The Lord of the Rings",
				author: "J. R. R. Tolkien",
				price: 39.99,
				imageUrl: 'https://d.gr-assets.com/books/1411114164l/33.jpg'
			},
			{
				bookId: 2,
				title: "Harry Potter and the Philosopher's Stone",
				author: "J.K. Rowling",
				price: 29.99,
				imageUrl: 'https://d.gr-assets.com/books/1348821741l/7568427.jpg'
			},
			{
				bookId: 3,
				title: "And Then There Were None",
				author: "Agatha Christie",
				price: 15.90,
				imageUrl: 'https://d.gr-assets.com/books/1391120695l/16299.jpg'
			},
			{
				bookId: 4,
				title: "The Lion, the Witch and the Wardrobe",
				author: "C. S. Lewis",
				price: 19.99,
				imageUrl: 'https://d.gr-assets.com/books/1353029077l/100915.jpg'
			},
			{
				bookId: 5,
				title: "The Da Vinci Code",
				author: "Dan Brown",
				price: 24.90,
				imageUrl: 'https://d.gr-assets.com/books/1303252999l/968.jpg'
			},
			{
				bookId: 6,
				title: "Think and Grow Rich",
				author: "Napoleon Hill",
				price: 14.99,
				imageUrl: 'https://d.gr-assets.com/books/1463241782l/30186948.jpg'
			},
			{
				bookId: 7,
				title: "Anne of Green Gables",
				author: "Lucy Maud Montgomery",
				price: 15.00,
				imageUrl: 'https://d.gr-assets.com/books/1390789015l/8127.jpg'
			},
			{
				bookId: 8,
				title: "The Eagle Has Landed",
				author: "Jack Higgins",
				price: 23.99,
				imageUrl: 'https://d.gr-assets.com/books/1347958282l/295961.jpg'
			},
			{
				bookId: 9,
				title: "The Mark of Zorro",
				author: "Johnston McCulley",
				price: 34.99,
				imageUrl: 'https://d.gr-assets.com/books/1312040592l/898839.jpg'
			},
			{
				bookId: 10,
				title: "Charlotte's Web",
				author: "E.B. White",
				price: 27.90,
				imageUrl: 'https://d.gr-assets.com/books/1439632243l/24178.jpg'
			}
		];

	getBooks(): Observable<Array<IBook>>{
		return Observable.create((observer) => {
			setTimeout(()=> {
				//Simulate service request delay
				observer.next(this.mockBooksList);
				observer.complete();
			}, 1000);
		});
	}
}