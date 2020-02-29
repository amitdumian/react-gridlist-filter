import React from 'react';
import AppState from './AppState';
import Card from '../Card/Card';
import AppProps from './AppProps';
import {cardObject} from '../Card/CardProps';
import './App.scss';

export default class App extends React.Component<AppProps, AppState> {
  apiUrl = 'https://api.elderscrollslegends.io/v1/cards';
  pageSize = 20; /// contains the no. of records to display initially and on scroll
  startIndex = 0; /// index to keep track of starting index of records in the display
  minSearchTextLength: 3; /// for performance set min limit after which the search will trigger 
  textMaxLength: 50;
  constructor(props:AppProps){
  super(props);
  this.state = new AppState();
    this.state = {
      cardData:[],
      searchText: ''
    }
  }

  componentDidMount() {
    this.fetchCards();
    window.addEventListener('scroll', this.handleScroll); /// add window scroll event listener 
   }

   // catch and log any script errors
   componentDidCatch(error, info) {
    console.log('error: ', error);
    console.log('info: ', info);
   }
   
   /// Remove the event listner on component unmount
   componentWillUnmount() {
     window.removeEventListener('scroll', this.handleScroll)
   }

   fetchCardsOnScroll(startIndex:number)
   {
     const fetchPromise = fetch(this.apiUrl);
     this.setState({ loading: true }) // start spinner
     fetchPromise.then(response => response.json())
      .then(data => {
        const offers = data.cards.slice();  // pick up the original cards returned from api
        const filteredCards = this.getFilterCards(offers);
        if(filteredCards.length > this.pageSize)
        {
          const moreData = filteredCards.splice(startIndex, this.pageSize); // fetch  subset of records
          if (moreData.length > 0 && (startIndex+this.pageSize <= offers.length)) {
            this.startIndex =  startIndex;
            this.setState({ cardData: this.state.cardData.concat(moreData) });
          }
        }
         this.setState({ loading: false })
        } 
      )
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false }); /// stop spinner
        return Promise.reject();
      });
   }


  /// method gets call on page load
  /// when text entered in the box
  /// When button is clicked for search
   fetchCards = () =>
   {
     this.setState({ loading: true })
     const fetchPromise = fetch(this.apiUrl);
     fetchPromise
      .then(response => response.json())
      .then(data => {
          let filteredCards = data.cards;
          // if search text is passed, filter the cards based on name
          if(this.state.searchText && this.state.searchText.trim() !== '')
          {
            filteredCards = this.getFilterCards(data.cards);
          }
          this.setState({ cardData: filteredCards.splice(this.startIndex, this.pageSize) })
          this.setState({ loading: false })
        }
      )
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false })
        return Promise.reject()
      });
   
   }

   // function to return the list of filtered cards based on card name
   getFilterCards = (cards: cardObject[]) =>
   {
        // data field based on which records need to be filtered
        const searchText = this.state.searchText?this.state.searchText:'';
        const searchField = 'name';
        const filteredCards = cards.filter(function(product:cardObject) {
              for (var i in product) {
                  if (product[searchField].toLowerCase().indexOf(searchText.toLowerCase()) > -1) 
                  return product;
              }
         })

        return filteredCards;
   }

  
   // function called on textbox onchange event
   handleChange = (event:any) => {
      this.setState({searchText: event.target.value});
      //if(event.target.value && event.target.value.length > this.minSearchTextLength)
      //{
         this.fetchCards();
      //}
    }
  
   // function call triggered on window scroll
   handleScroll = (e:any) => {
    let element = e.target;
    if (element.scrollingElement.scrollHeight - element.scrollingElement.scrollTop === element.scrollingElement.clientHeight) {
      this.fetchCardsOnScroll(this.startIndex+this.pageSize);
     }
   }

  render() {
   const{cardData} = this.state;
      return (
      <React.Fragment>
           <div className='button-div'> 
              <input type='text'
                placeholder="Search by name"  
                value={this.state.searchText}
                maxLength = {this.textMaxLength}
                onChange={this.handleChange} 
                className='textbox'
              />
             <button onClick={this.fetchCards} className='button'>Search</button>
            </div>
             {this.state.loading && this.renderSpinner()}
             {cardData && this.renderGrid()}
      </React.Fragment>
    
    );
  }

  // function to return the spinner div html
  renderSpinner()
  {
    return(
      <div className = 'spinner'></div>
    )
  }


  renderGrid() {
   const cData= this.state.cardData;
   return(
      <div className = 'item-container'>
          {cData.map((data:cardObject, i:number) => (
            <React.Fragment>
              <Card 
                cardData={data}>
              </Card>
            </React.Fragment>
            ))}
      </div>
    )
  }
 }
 


