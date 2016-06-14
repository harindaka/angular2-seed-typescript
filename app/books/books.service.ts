import { Injectable } from '@angular/core'

export interface IBook {
	bookId: number,
	title: string
	author: string
	price: number
}

@Injectable()
export class BooksService{
	
	private mockBooksList: Array<IBook> =  [
			{
				bookId: 1,
				title: "The Lord of the Rings",
				author: "J. R. R. Tolkien",
				price: 39.99
			},
			{
				bookId: 2,
				title: "Harry Potter and the Philosopher''s Stone",
				author: "J.K. Rowling",
				price: 29.99
			},
			{
				bookId: 3,
				title: "And Then There Were None",
				author: "Agatha Christie",
				price: 15.90
			},
			{
				bookId: 4,
				title: "The Lion, the Witch and the Wardrobe",
				author: "C. S. Lewis",
				price: 19.99
			},
			{
				bookId: 5,
				title: "The Da Vinci Code",
				author: "Dan Brown",
				price: 24.90
			},
			{
				bookId: 6,
				title: "Think and Grow Rich",
				author: "Napoleon Hill",
				price: 14.99
			},
			{
				bookId: 7,
				title: "Anne of Green Gables",
				author: "Lucy Maud Montgomery",
				price: 15.00
			},
			{
				bookId: 8,
				title: "The Eagle Has Landed",
				author: "Jack Higgins",
				price: 23.99
			},
			{
				bookId: 9,
				title: "The Mark of Zorro",
				author: "Johnston McCulley",
				price: 34.99
			},
			{
				bookId: 10,
				title: "Charlotte''s Web",
				author: "E.B. White",
				price: 27.90
			}
		];

	getBooks(): Array<IBook>{
		return this.mockBooksList;
	}
}