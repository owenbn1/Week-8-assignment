class Game {
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
// created a class is being used to construct a internal data for the games and its score.

    describe(){
        return `${this.name} has an overall score of ${this.score} /10 `
    }
    //this is just the output of the games a overall score for users opinion.
}

class Genre {
    constructor(name){
        this.name = name;
        this.games =[];
    }
    //making an array for the games name to be put an store it

    addGame(game){
        if(game instanceof Game){
            this.games.push(game);
        } else {
            throw new Error('you can only add Games')
        }
        // made an if and else to addgame to be push out to the array 
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
    //created a class menu that also holds an array for the different genres the user can input
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
        //made a case switch to have different selection on the menu option
        
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
    // this is just the prompt for the case switch so its easier to use
    showGenreGameOptions(gameInfo)   {
    return prompt (`
    0) back
    1) add a new game
    2) delete a game

    -------------------
    ${gameInfo}

    `);

    }
    // also another prompt for the sub division for add and delete games

    displayGenres(){
    let genreString = '';
    for(let i = 0; i < this.genres.length; i++){
        genreString += i +') ' +this.genres[i].name + '\n'
    }
    alert(genreString);
    }
    // method that goes literate through the genres length and out put the string its in

    createGenre(){
        let name = prompt('Enter genre name');
        this.genres.push(new Genre(name))
    }
    // method that creates a genre and pushes to the genre name file

    viewGenre(){
        let index = prompt('Enter index genre you wish to view: ');

        if (index > -1 && index < this.genres.length){
            this.selectedGenre = this.genres[index];
            let description = 'Genre Name: ' + this.selectedGenre.name + '\n';

            for(let i = 0; i < this.selectedGenre.games.length; i++){
                description += i + ') ' + this.selectedGenre.games[i].describe() + '\n';
            }

            let selection = this.showGenreGameOptions(description);
            switch (selection){
                case '1':
                    this.createGame();
                    break;
                case '2':
                    this.deleteGame();
                    break;
                default:
                    alert("Invalid choice. Please choose again");
            }
            selection = this.showGenreGameOptions(description);
        }
    }

    deleteGenre(){
        let index = prompt( 'Enter the genre you wish to delete: ');
        if (index > -1 && this.genres.length){
            this.genres.splice(index,1);
        }
    }
    // deletes the genre the users wishes to delete by input the index and slicing it out of the array

    createGame(){
        let name = prompt('Enter Game: ');
        let score = prompt('Enter 1 - 10 how you liked the game: ');
        this.selectedGenre.addGame(new Game(name,score));
    }

    // this method gives a prompt that asked what game you want to put in the genre and also inputting a rate on the game.

    deleteGame(){
        let index = prompt('Enter the game that you wish to delete: ');
        if(index >- 1 && index < this.selectedGenre.games.length){
            this.selectedGenre.games.splice(index,1);
        }
    }
    // this deletes the game/rate of the inside the genre you viewed at
}

let menu = new Menu();
menu.start();
// basically starts the menu prompt






