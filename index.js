class Game {
    constructor(name, score){
        this.name = name;
        this.score = score;
    }

    describe(){
        return `${this.name} has an overall score of ${this.score} /10 `
    }
}

class Genre {
    constructor(name){
        this.name = name;
        this.games =[];
    }

    addGame(game){
        if(game instanceof Game){
            this.games.push(game);
        } else {
            throw new Error('you can only add Games')
        }
    }

    describe(){
        return`${this.games} are ${this.name}`
    }
}

class Menu {
    constructor(){
        this.genres = [];
        this.selectedGenre = null;
    }
    start(){
        let selection = this.showMainMenuOptions();
        while (selection !== 0) {
            switch(selection){
                case '1':
                    this.createGenre();
                    break;
                case '2':
                    this.viewGenre();
                    break;
                case '3':
                    this.deleteGenre();
                    break;
                case '4':
                    this.displayGenres();
                    break;
                case '0':
                    this.exitMenu(alert('Exiting.... GoodBye!'));
                    break;
                default:
                    alert("Invalid choice. Please choose again")

            }
            selection = this.showMainMenuOptions();
        }
        
    }
    showMainMenuOptions() {
    return prompt(`
        0) exit
        1) create a game genre
        2) view a game genre
        3) delete a game genre
        4) display all game genre
    `);
    }
    showGenreMenuOptions(gameInfo)   {
    return prompt (`
    0) back
    1) add a new game
    2) delete a game

    -------------------
    ${gameInfo}

    `);

    }
    displayGenres(){
    let genreString = '';
    for(let i = 0; i < this.genres.length; i++){
        genreString += i +') ' +this.genres[i].name + '\n'
    }
    alert(genreString);
    }

    createGenre(){
        let name = prompt('Enter genre name');
        this.genres.push(new Genre(name))
    }

    viewGenre(){
        let index = prompt('Enter index genre you wish to view: ');

        if (index > -1 && index < this.genres.length){
            this.selectedGenre = this.genres[index];
            let description = 'Genre Name: ' + this.selectedGenre.name + '\n';

            for(let i = 0; i < this.selectedGenre.games.length; i++){
                description += i + ') ' + this.selectedGenre.games[i].describe() + '\n';
            }

            let selection = this.showGenreMenuOptions(description);
            switch (selection){
                case '1':
                    this.createGame();
                    break;
                case '2':
                    this.deleteGame();
                    break;
                default:
                    break;
            }
        }
    }

    deleteGenre(){
        let index = prompt( 'Enter the genre you wish to delete: ');
        if (index > -1 && this.genres.length){
            this.genres.splice(index,1);
        }
    }

    createGame(){
        let name = prompt('Enter Game: ');
        let score = prompt('Enter 1 - 10 how you liked the game: ');
        this.selectedGenre.addGame(new Game(name,score));
    }

    deleteGame(){
        let index = prompt('Enter the game that you wish to delete: ');
        if(index >- 1 && index < this.selectedGenre.games.length){
            this.selectedGenre.games.splice(index,1);
        }
    }
}

let menu = new Menu();
menu.start();






