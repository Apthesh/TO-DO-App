// import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// import IconButton from '@mui/material/IconButton';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import TextField from '@mui/material/TextField';


 import { useRef,useState } from "react"
import { Box, Container } from '@mui/material';
// import { Margin } from '@mui/icons-material';
let Tool = () => {
    let [toggle,settoggle]=useState({show:false,id:""})
    let editRef =useRef(null);
    let [item, setItem] = useState('');
    let [items, setItems] = useState([]);
   
    let changeItem = (e) => {
      setItem(e.target.value);
    };
  
    let AddItem = (e) => {
      e.preventDefault();
      if(item!= ""){
        setItems([...items, item]);
      setItem("")
      }
      
    };
  
    let DeleteItem = (id) => {
     items.splice(id,1) ;
     setItems([...items]); 
    };
  
    let editItem=(id)=>
    {
      editRef.current.focus();
      settoggle({show:true,id})
      setItem(items[id])
      // console.log("edit item")
    } 
  
    let updateItem= ()=>
    {
      settoggle({show:false})
      items[toggle.id]= item;
      setItems([...items])
      setItem("")
    }
  ;


  return (
    <>
    <Container sx={{background:"lightblue",borderRadius:10, display:"flex",alignItems:"start",justifyContent:"center",width:600}} >
        <Box sx={{color:"green",display:"flex",alignItems:"center",justifyContent:"center", flexDirection:"column" }} >
      <h1 >TO DO APP</h1>
        
      <TextField input sx={{width:400}} onChange={changeItem} ref={editRef} value={item} placeholder="Enter the Value" required id="outlined-required" label="Enter Value" /> 
        <br /><br />
        {/* <input type="text" onChange={changeItem} ref={editRef} value={item} placeholder="Enter the Value" /> */}
        <Button variant="outlined" startIcon={<SendSharpIcon/>} onClick={AddItem} sx={{color:"red",border:"2px solid red"}}>Submit </Button>
<br />
        {toggle.show &&  <Button variant='outlined' startIcon={<EditSharpIcon/>} sx={{color:"red",}} onClick={updateItem}>Update</Button>}
      <div className='long'>
        <ol>
          {items.map((item, index) => (
            <>
            <Container sx={{display:"flex",justifyContent:"space-evenly"}}>
              <Box sx={{color:"black",display:"flex",gap:10,marginBottom:4}} key={index}>{item}
              <Box  sx={{display:"flex"}}>
              <Button variant="outlined" startIcon={<DeleteIcon />}onClick={()=>DeleteItem(index)}  sx={{border:"2px solid black"}}>Delete </Button>
              <Button variant='outlined' startIcon={<EditSharpIcon/>} onClick={()=>{editItem(index)}} sx={{border:"2px solid blue"}}>Edit</Button>
              </Box>
              </Box>   
              </Container> 
              </>
          ))}
        </ol>
      </div>
      </Box>
      </Container>

      </>
   
  )
}

export default Tool