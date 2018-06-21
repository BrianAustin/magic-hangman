import React from 'react';

export default class Instructions extends React.Component {
  constructor(props) {
    super(props);
  }
  
  
    render() {
      return(
        <div className='container text-left'>
          <div className='page-header'>
            <h1 className='text-black'>Hangman</h1>
            <p className='lead text-black'>Instructions</p>
            <hr />
          </div>
        <div className='jumbotron'>
          <p>Play individually or in groups.</p>
          <p>Have the student select a letter of the alphabet.</p>
          <p>If the letter is contained in the word/phrase, the group or individual takes another turn guessing a letter.  To reveal a letter (depending on which slide template is used), either:</p>
          <p>1) Click on the square with appropriate letter in it to reveal the letter within the word/phrase (used with slides 1 and 2)</p>
          <p>2) Click on the letter in the alphabet area which will then trigger the letter to be revealed if it is contained in the word/phrase or change the color of the Try Again button indicating that the letter is not contained in the word/phrase (used with slide 3).</p>
          <p>If the letter is not contained in the word/phrase, click the Try Again button, a portion of the hangman is added.</p>
          <p>The game continues until:</p>
          <p>1) the word/phrase is guessed (all letters are revealed) – WINNER or,</p>
          <p>2) all the parts of the hangman are displayed – LOSER</p>

          <button 
          className='btn btn-primary col-md-4 offset-md-4'
          onClick={this.props.buttonToggle}
          >Play</button>
        </div>  

       
          
          {/* container div end below */}
        </div>
      );
    }
  }