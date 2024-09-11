import React from 'react'

const App = () => {
  return (
    <div>
      <StarRating/>
      <Star />
    </div>
  )
}

function StarRating({maxRating = 5}) {
  return (
    <div>
      <div>
        {Array.from({length: maxRating}, (_, index) => (
            <span>S{index+1}</span>))}
      </div>
    </div>
  )
}

function Star(){
    const [isActivated, setIsActivated] = React.useState(false)
    return (
        <span role='button' onClick={()=>setIsActivated(!isActivated)}>{isActivated ? "☆" : "★"}</span>
    )
}

export default App
