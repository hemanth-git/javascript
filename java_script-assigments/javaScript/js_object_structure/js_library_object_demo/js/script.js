function mainProgram() {
	var books = [{
		id: 1,
		name: 'Name of the wind',
		year: 2015,
		rating: 4.5,
		author: 2
		},{
		id: 2,
		name: 'Oka Yogi Atma Kadha',
		year: 1940,
		rating: 5,
		author: 3
		},{
		id: 3,
		name: 'Wings of fire',
		year: 2004,
		rating: 5,
		author: 4
		}];
	var author = [{
		id: 1,
		name: 'JK Rowling'
	}, {
			id: 2,
			name: 'Patrick Rothfuss'
		},{
			id: 3,
			name: 'Paramahamsa Yogananda'
		},{
			id: 4,
			name: 'Abdul kalam'
		}];
		console.log("type function on console");
		console.log("addBook(name,author,year,rating) \n"+"addAuthor(name) "
		+"\nlistOfBooksAuthor(authorName)\n"+"\nlistOfBooksHigherThan(rating)"
		+"\neditBoooks(id,name,year,rating,authorName)"+"\neditAuthors(id,authorName)");
		
	function addBook(name, authorName, year, rating) {

		var tempBookObj = {
			id: 0,
			name: '',
			year: 0,
			rating: 0,
			author: 0 
		};
		tempBookObj.id = books.length + 1;
		tempBookObj.name = name;
		tempBookObj.year = year;
		tempBookObj.rating = rating;
		for (var i = 0; i <author.length; i++) {
			if (author[i].name === authorName) {
				tempBookObj.author = author[i].id;
			}
		}
		books.push(tempBookObj);
		console.log(books);
	}
	
	function addAuthor(name) {
		var tempAuthorObj = {
			id: 0,
			name: ''
		};
		tempAuthorObj.id = author.length + 1;
		tempAuthorObj.name = name;
		author.push(tempAuthorObj);
	}
	
	function listOfBooksHigherThan(rating){
		for(var i=0;i<books.length;i++){
			if(books[i].rating>=rating) {
				console.log(books[i].name+" rating= "+books[i].rating);
			}
		}
	}
	
	function listOfBooksAuthor(authorName){
		var authorId;
		for(var i=0;i<author.length;i++) {
			if(author[i].name === authorName) {
				authorId=author[i].id;
				break;
			}
		}
		for(var i=0;i<books.length;i++) {
			if(books[i].author === authorId) {
				console.log(books[i].name);
			}
		}
	}
	
	function editBoooks(id,name,year,rating,authorName){
		
		for(var i=0;i<books.length;i++) {
			if(id === books[i].id) {
				books[i].name=name;
				books[i].year=year;
				books[i].rating=rating;
				for(var j=0;j<author.length;j++) {
					if(authorName === author[j].name){
						books[i].author=author[j].id;
						break;
					}
				}
				break;
			}
		}
	}
	function editAuthors(id,authorName){
		for(var i=0;i<author.length;i++) {
			if(id === author[i].id) {
				author[i].name=authorName;
				break;
			}
		}
	
	}
	
	editAuthors();
	editBoooks();
	listOfBooksAuthor();
	listOfBooksHigherThan();
}
mainProgram();
