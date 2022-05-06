import React, {useState, useEffect} from "react";
import Book from "./components/Book";
import LoadingMask from "./components/LoadingMask";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function App() {
  
  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState([])
  const [input, setInput] = useState("")
  const [sort, setSort] = useState("desc")

  async function fetchBooks() {

    const response = await fetch("http://www.testdomain.com/v1/api/books")
    const responseJSON = await response.json()
    console.log(responseJSON);

    setBooks(responseJSON)
    setLoading(false) //ha letoltotodott az adat itt visszarakjuk false-ra
  }

  useEffect(() => {
    setLoading(true)
    fetchBooks()
  }, [])
  
function sortBooks() {
  setBooks([...books.sort((a,b) => sort === "desc" ? b.year - a.year : a.year - b.year)])
  setSort(sort === "desc" ? "asc" : "desc")
}


  return (
    <div className="App">
      {loading ? <LoadingMask/> : 
      <>
        <Button variant="contained"onClick={sortBooks}>Sort button</Button>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={input} onChange={({target}) => {setInput(target.value)}} />
        {books.map(({title, author, year}) => (title.toLowerCase().includes(input.toLowerCase()) && <Book key={year} title={title} author={author} year={year}/>))}
      </>
      }
    </div>
  );
}

export default App;
//ennek az a hatranya ha valtozik aaz adadtsrutura akkor gaz
//book componenesen belul jelenjeng meg a cim es legyen gomb akkor jelenjen meg az author es ev, ujra rakatt tunjon el 16:10
