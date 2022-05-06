import React, {useState} from 'react'
import Button from '@mui/material/Button';

function Book({title, author, year}) {

    const [details, setDetails] = useState(false)

  return(
      <div>
          <h2>{title}</h2>
          {details ?
          <>
            <h3>{author}</h3>
            <h3>{year}</h3>
          </>: false
          }
            <Button variant="outlined" onClick={() => {setDetails(!details)}}>{details ? "Hide details" : "Show details"}</Button>
          
      </div>
  )
  
}

export default Book


/* // igy is lehet
<h2>{title}</h2>
{details &&
<>
  <h3>{author}</h3>
  <h3>{year}</h3>
</>
} */