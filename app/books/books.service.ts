import { Injectable } from '@angular/core'

export interface IBook {
	title: string
	author: string
	price: number
}

@Injectable()
export class BooksService{
	
	getBooks(): Array<IBook>{
		return [
			{
				title: "The Lord of the Rings",
				author: "The Lord of the Rings",
				price: 39.99
			},
			{
				title: "Harry Potter and the Philosopher''s Stone",
				author: "J.K. Rowling",
				price: 29.99
			},
			{
				title: "And Then There Were None",
				author: "Agatha Christie",
				price: 15.99
			},
			{
				title: "The Lion, the Witch and the Wardrobe",
				author: "C. S. Lewis",
				price: 19.99
			},
			{
				title: "The Da Vinci Code",
				author: "Dan Brown",
				price: 24.99
			},
			{
				title: "Think and Grow Rich",
				author: "Napoleon Hill",
				price: 14.99
			},
			{
				title: "Anne of Green Gables",
				author: "Lucy Maud Montgomery",
				price: 15.99
			},
			{
				title: "The Eagle Has Landed",
				author: "Jack Higgins",
				price: 23.99
			},
			{
				title: "The Mark of Zorro",
				author: "Johnston McCulley",
				price: 34.99
			},
			{
				title: "Charlotte''s Web",
				author: "E.B. White",
				price: 27.90
			}
		]
	}
}