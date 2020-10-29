import React, {useState, useEffect} from 'react';

const Bonus = () => {

    useEffect(() => {
      setUseERan(true)
      shuffle(arr)
      // alert(arr)
    }, []);
    const [useERan, setUseERan] = useState(false)
    const [winCount, setWinCount] = useState(0)
    const [verifier, setVerifier] = useState(true)
    const [i, setI] = useState(0)
    const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9])

    // let verifier = true
    // let arr = [1,2,3,4]

    

    function incrementer(){
        
    }

    // does this arrow function below do the binding automatically?
    const buttonHigh = () => {
      // alert('present index of array = ' + arr.indexOf(arr[0]))

      if (arr[i] < arr[i+1])
      {
        alert('Correct!')
        setI(i+1)
        setWinCount(winCount+1)
        if (arr.indexOf(arr[i])=== 7){
          setVerifier(false)
        }
        // verifier = false
        // alert(arr)
        if (winCount == 7)
        alert('YOU WIN THE GAME!')
      }
      if (arr[i] > arr[i+1])
      {
        alert('You lose! Here is the order: ' + arr)
        window.location.reload();
        // setI(i+1)
        // if (arr.indexOf(arr[i])=== 7){
        //   setVerifier(false)
        // }
        // verifier = false
        // alert(arr)
      }
    }

    const buttonLow = () => {
      if (arr[i] > arr[i+1])
      {
        alert('Correct!')
        setI(i+1)
        setWinCount(winCount+1)
        if (arr.indexOf(arr[i])=== 7){
          setVerifier(false)
        }
        // verifier = false
        // alert(arr)
        if (winCount == 7)
        alert('YOU WIN THE GAME!')
      }
      if (arr[i] < arr[i+1])
      {
        alert('You lose! Here is the order: ' + arr)
        window.location.reload();
        // setI(i+1)
        // if (arr.indexOf(arr[i])=== 7){
        //   setVerifier(false)
        // }
        // verifier = false
        // alert(arr)
      }
    }

    function shuffle(array) {
        var currentIndex = array.length;
        var temporaryValue
        var randomIndex
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        // setArr(array)
        return array;
      }
    
    function imageReader (number) {
      if (number === 0)
      return "/images/card.JPG"
      if (number === 1)
      return "/images/card1.JPG"
      if (number === 2)
      return "/images/card2.JPG"
      if (number === 3)
      return "/images/card3.JPG"
      if (number === 4)
      return "/images/card4.JPG"
      if (number === 5)
      return "/images/card5.JPG"
      if (number === 6)
      return "/images/card6.JPG"
      if (number === 7)
      return "/images/card7.JPG"
      if (number === 8)
      return"/images/card8.JPG"
      if (number === 9)
      return "/images/card9.JPG"
    }
    return(
        <div>
             {/* <p align="center">{ arr}</p> */}
             <br />
             <div class="vertical-center">
             <button onClick={buttonHigh}>High</button>
             <br />
             <button onClick={buttonLow}>Low</button>
             </div>
             <p align="center">win count: {winCount}</p>
             <div class="vertical-center">
              <img src={
                winCount === 0 ?
                imageReader(arr[0]) :
                winCount === 1 ?
                imageReader(arr[0]) :
                winCount === 2 ?
                imageReader(arr[0]) :
                winCount === 3 ?
                imageReader(arr[0]) :
                winCount === 4 ?
                imageReader(arr[0]) :
                winCount === 5 ?
                imageReader(arr[0]) :
                winCount === 6 ?
                imageReader(arr[0]) :
                winCount === 7 ?
                imageReader(arr[0]) :
                winCount === 8 ?
                imageReader(arr[0]) :
                ''
              } />
              {/* 2nd card */}
              <img src={
                winCount === 0 ?
                imageReader(0) :
                winCount === 1 ?
                imageReader(arr[1]) :
                winCount === 2 ?
                imageReader(arr[1]) :
                winCount === 3 ?
                imageReader(arr[1]) :
                winCount === 4 ?
                imageReader(arr[1]) :
                winCount === 5 ?
                imageReader(arr[1]) :
                winCount === 6 ?
                imageReader(arr[1]) :
                winCount === 7 ?
                imageReader(arr[1]) :
                winCount === 8 ?
                imageReader(arr[1]) :
                ''
              } />
               <img src={
              winCount === 0 ?
              imageReader(0) :
              winCount === 1 ?
              imageReader(0) :
              winCount === 2 ?
              imageReader(arr[2]) :
              winCount === 3 ?
              imageReader(arr[2]) :
              winCount === 4 ?
              imageReader(arr[2]) :
              winCount === 5 ?
              imageReader(arr[2]) :
              winCount === 6 ?
              imageReader(arr[2]) :
              winCount === 7 ?
              imageReader(arr[2]) :
              winCount === 8 ?
              imageReader(arr[2]) :
              ''
             } />
               <img src={
              winCount === 0 ?
              imageReader(0) :
              winCount === 1 ?
              imageReader(0) :
              winCount === 2 ?
              imageReader(0)  :
              winCount === 3 ?
              imageReader(arr[3])  :
              winCount === 4 ?
              imageReader(arr[3]) :
              winCount === 5 ?
              imageReader(arr[3]) :
              winCount === 6 ?
              imageReader(arr[3]) :
              winCount === 7 ?
              imageReader(arr[3]) :
              winCount === 8 ?
              imageReader(arr[3]) :
              ''
             } />
               <img src={
              winCount === 0 ?
              imageReader(0) :
              winCount === 1 ?
              imageReader(0) :
              winCount === 2 ?
              imageReader(0)  :
              winCount === 3 ?
              imageReader(0)  :
              winCount === 4 ?
              imageReader(arr[4]) :
              winCount === 5 ?
              imageReader(arr[4]) :
              winCount === 6 ?
              imageReader(arr[4]) :
              winCount === 7 ?
              imageReader(arr[4]) :
              winCount === 8 ?
              imageReader(arr[4]) :
              ''
             } />
               <img src={
              winCount === 0 ?
              imageReader(0) :
              winCount === 1 ?
              imageReader(0) :
              winCount === 2 ?
              imageReader(0)  :
              winCount === 3 ?
              imageReader(0)  :
              winCount === 4 ?
              imageReader(0)  :
              winCount === 5 ?
              imageReader(arr[5])  :
              winCount === 6 ?
              imageReader(arr[5]) :
              winCount === 7 ?
              imageReader(arr[5]) :
              winCount === 8 ?
              imageReader(arr[5]) :
              ''
             } />
               <img src={
             winCount === 0 ?
             imageReader(0) :
             winCount === 1 ?
             imageReader(0) :
             winCount === 2 ?
             imageReader(0)  :
             winCount === 3 ?
             imageReader(0)  :
             winCount === 4 ?
             imageReader(0)  :
             winCount === 5 ?
             imageReader(0)  :
             winCount === 6 ?
             imageReader(arr[6])  :
             winCount === 7 ?
             imageReader(arr[6]) :
             winCount === 8 ?
             imageReader(arr[6]) :
             ''
             } />
               <img src={
              winCount === 0 ?
              imageReader(0) :
              winCount === 1 ?
              imageReader(0) :
              winCount === 2 ?
              imageReader(0)  :
              winCount === 3 ?
              imageReader(0)  :
              winCount === 4 ?
              imageReader(0)  :
              winCount === 5 ?
              imageReader(0)  :
              winCount === 6 ?
              imageReader(0)  :
              winCount === 7 ?
              imageReader(arr[7]) :
              winCount === 8 ?
              imageReader(arr[7]) :
              ''
             } />
               <img src={
               winCount === 0 ?
               imageReader(0) :
               winCount === 1 ?
               imageReader(0) :
               winCount === 2 ?
               imageReader(0)  :
               winCount === 3 ?
               imageReader(0)  :
               winCount === 4 ?
               imageReader(0)  :
               winCount === 5 ?
               imageReader(0)  :
               winCount === 6 ?
               imageReader(0)  :
               winCount === 7 ?
               imageReader(0)  :
               winCount === 8 ?
               imageReader(arr[8])  :
               ''
             } />
             </div>
             {/* <img src="/images/card.JPG" /> */}
             {/* <p>
              {winCount === 0 ? arr[0] : ''}
              {winCount === 1 ? arr[0] + '' + arr[1] : ''} 
              {winCount === 2 ? arr[0] + '' + arr[1] + '' + arr[2] : ''} 
              {winCount === 3 ? arr[0] + '' + arr[1] + '' + arr[2] + '' + arr[3] : ''} 
              {winCount === 4 ? arr[0] + '' + arr[1] + '' + arr[2] + '' + arr[3] + '' + arr[4] : ''} 
              {winCount === 5 ? arr[0] + '' + arr[1] + '' + arr[2] + '' + arr[3] + '' + arr[4] + '' + arr[5] : ''} 
              {winCount === 6 ? arr[0] + '' + arr[1] + '' + arr[2] + '' + arr[3] + '' + arr[4] + '' + arr[5]+ '' + arr[6] : ''} 
              {winCount === 7 ? arr[0] + '' + arr[1] + '' + arr[2] + '' + arr[3] + '' + arr[4] + '' + arr[5]+ '' + arr[6]+ '' + arr[7] : ''}
              {winCount === 8 ? arr[0] + '' + arr[1] + '' + arr[2] + '' + arr[3] + '' + arr[4] + '' + arr[5]+ '' + arr[6]+ '' + arr[7] + '' + arr[8] : ''}
             </p> */}
             {/* <p> {useERan ? (verifier ? arr[i]: arr) : ''}</p>  */}
        </div>
    )
}

export default Bonus;