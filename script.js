
const apiKey = "8d4d216034a6cc5d38e0cfb298a6acf2";
axios.defaults.headers.common = { 'Authorization': `Token token=${apiKey}` };
const url = 'https://favqs.com/api/quotes'
const button = document.querySelector('#generate-quote-button')
const displayAuthor = document.querySelector('#display-author')
const displayQuote = document.querySelector('#display-quote')

button.addEventListener('click', async () => {
  const response = await axios.get(`${url}`);
  let renderedQuote = response.data.quotes[0].body;

  let renderedAuthor = response.data.quotes[0].author;
  const getQuote = (renderedQuote) => {

    displayQuote.innerHTML = " "
    displayQuote.innerHTML = renderedQuote;//dont delete this line 

    displayQuote.append() //keep this line here
  }
  getQuote(renderedQuote)

  const getAuthor = (renderedAuthor) => {

    displayAuthor.innerHMTL = " ";
    displayAuthor.innerHTML = renderedAuthor; //dont delete this line 

    displayAuthor.append() //keep this line here

  }
  getAuthor(renderedAuthor)
})



////////////////////------------------------------------------------------------//////////
// const button = document.querySelector('#search')
// const quote = document.querySelector('#output')//  #output was the name of the div where I'll display quote

// button.addEventListener('click', async () => {
//   const response = await axios.get(`${url}`);
//   let author = response.data.quotes[0].author;
//   let quoteDisplay = response.data.quotes[0].body;


// })


// const getQuote = (quoteDisplay) => {
//   output.innerHMTL = " "

//   output.innerHTML = quoteDisplay; //dont delete this line 

//   output.append() //keep this line here
// }

// // console.log(response)
// getQuote(quoteDisplay)



//////---------------

  // // console.log(renderedQuote)
  // const getAuthor = (renderedAuthor) => {

  //   displayAuthor.innerHMTL = " ";
  //   displayAuthor.innerHTML = renderedAuthor; //dont delete this line 

  //   displayAuthor.append() //keep this line here

  // }
  // getAuthor(renderedAuthor)