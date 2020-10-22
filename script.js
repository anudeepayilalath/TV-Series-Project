//You can edit ALL of the code here
function  setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  //tvShows();
  //withBts(allshows);

  
  dropDown();
  let allshows=getAllShows();
            withBts(allshows);
           
           
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;



    // function tvShows(){
      
    //   let list=document.querySelector("#listofshows")
    //   for(let i=0; i<getAllShows().length; i++){
    //     let h2=document.createElement("h2")
    //         h2.innerHTML=getAllShows()[i].name
    //         console.log(h2)
    //     let a=document.createElement("a")
    //         a.setAttribute("href", getAllShows()[i].url)
    //     let button=document.createElement("button")
    //         //button.setAttribute("href", getAllShows()[i].url)
    //         button.innerHTML="Info"
    //     let image=document.createElement("img")
    //         image.setAttribute("src", getAllShows()[i].image.medium)
            
    //     let descp=document.createElement("p")
    //          descp.innerHTML=getAllShows()[i].genres 
    //     let divs=document.createElement("div")
    //         divs.classList.add("moviesdiv")
     
             
    //         divs.appendChild(h2)
    //         divs.appendChild(image)
    //         list.appendChild(divs)
    //         divs.appendChild(descp)
    //         divs.appendChild(a)
    //         a.appendChild(button)
    //         divs.style.textAlign="center"
    //         button.classList.add("buttonstyles")
    //         a.target="_blank"
    // }}
          
      //     image.style.border="solid 4px rgb(43, 45, 67)"   
          
          
      //     function searchForMovies(){
      //       let searchbar=document.getElementById("searchbar").value
            
      //              fetch("http://api.tvmaze.com/search/shows?q="+searchbar)
      //               .then((response)=>{response.json()})
      //               .then((result)=>{console.log(result)
      //                 for(let i=0; i<response.length; i++){
      //                   h2.innerHTML=response[i].show.name
      //                 }
                    
      //               })
      //       }
      //     let btnsearch=document.getElementById("searchButton")
      //         btnsearch.addEventListener("click", function(){
      //           searchForMovies();


      //         })
            
      //   }
      
      // }               fetch("http://api.tvmaze.com/search/shows?q="+searchbar)
      //               .then((response)=>{response.json()})
      //               .then((result)=>{console.log(result)
      //                 for(let i=0; i<response.length; i++){
      //                   h2.innerHTML=response[i].show.name
      //                 }
                    
      //               })
      //       }
      //     let btnsearch=document.getElementById("searchButton")
      //         btnsearch.addEventListener("click", function(){
      //           searchForMovies();


      //         })
            
      //   }
      
      // }






      ////////////////////////////////with Bootstrap


      


  function withBts(prgms){
    
        for(let i=0; i<prgms.length; i++){
             let listofshows=document.getElementById("listofshows")
                 listofshows.classList="d-flex flex-wrap  justify-content-center"
              let cardDiv=document.createElement("div")
                    
                
              cardDiv.innerHTML=`<div class='text-center card ' style='background-color:black; width: 11rem; margin:2em; border:none; '>
              <img src="${prgms[i].image.medium}"class='card-img-top' alt='...' style=' border-radius:0;'>
              <div class='card-body bg-dark text-center' >
                <h5 class='card-title text-center'>${prgms[i].name}</h5>
                <p class='card-text'> ${prgms[i].genres}</p>
                <a href="${prgms[i].url}" class='btn btn-primary bg-light' style=' font-size:0.8em; border:none; color:black; text-shadow: 0px 0px black; '>Show Info</a>
                
              </div>
             </div>`



            listofshows.appendChild(cardDiv)

          }
   }



      //livesearch area
      let livesrch=document.querySelector("#livesrch")
          livesrch.addEventListener("keydown", function(){

            let allshows=getAllShows();
            let filtered=allshows.filter((movie)=>{ 
                if(movie.name.toLowerCase().includes(livesrch.value.toLowerCase()) || movie.summary.toLowerCase().includes(livesrch.value.toLowerCase())){

                  return true
                }
            })

            let listofshows=document.getElementById("listofshows")
            console.log(filtered)
                  listofshows.innerHTML="";
                  withBts(filtered);
            
      })


      
//dropdown section
          const dropDown=()=>{
            
            let list=document.querySelector("#inputGroupSelect04")
              for(let i=0; i<getAllShows().length; i++){
                let show=document.createElement("option")
               //show.setAttribute("id", i);
                show.innerHTML=getAllShows()[i].name
                list.appendChild(show)
              }
            let showOne=document.getElementById("inputGroupSelect04")
            showOne.addEventListener("click", function(){
            let onlyOne=showOne.options[showOne.selectedIndex]
              console.log(onlyOne.innerHTML)
              console.log(showOne.selectedIndex)
            
            
            let selectedMovie=getAllShows()[showOne.selectedIndex]
              console.log(selectedMovie)
            listofshows.innerHTML=""
              withBts([selectedMovie])
             

          })
        }



          


//functioning of Dropdown

          // let option=document.getElementsByTagName("option")

          // option.addEventListener("click", function(){

          //   // let listofshows=document.getElementById("listofshows")
          //             console.log(listofshows)
            
          //       // listofshows.innerHTML="Test"
          //       alert("Hi")

          // })