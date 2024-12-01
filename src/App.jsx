// // import React from 'react'
// import '../public/App.css'
// import { useState } from "react"

// function App() {
//   let[fn, setfn]=useState('')
//   let[items,setitems]=useState([])
//   let updateitem=(e)=>
//   {
//     setfn(e.target.value)
//   }

//   let additem=(e)=>
//   {
//     e.preventDefault()
//     setitems([...items,fn])
//     setfn('')
//   }
//   return (
//     <>
//     <form>
//       <input type="text" onChange={updateitem} placeholder="Enter the Value "/>
//       <button type="submit" onClick={additem} >Submit</button>
//      </form>
//      <div className='long'>
//      <ol>
//       {items.map((item, index)=>
//       (<>
//         <li key={index}>{item}</li><hr />
//         </>
//         ))}
//      </ol>
//      </div>
//     </>
//   )
// }

// export default App



import { useRef, useState } from 'react';
import '../public/App.css';

function App() {
  let [toggle,settoggle]=useState({show:false,id:""})
  let editRef =useRef(null);
  let [item, setItem] = useState('');
  let [items, setItems] = useState([]);
 
  let changeItem = (e) => {
    setItem(e.target.value);
  };

  let AddItem = (e) => {
    e.preventDefault();
    setItems([...items, item]);
    setItem("")
  };

  let DeleteItem = (id) => {
   let filteredItems = (items.filter((_, index) => id !== index));
   setItems(filteredItems); 
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
      <form>
        <input type="text" onChange={changeItem} ref={editRef} value={item} placeholder="Enter the Value" />
        <button type="submit" onClick={AddItem}>Submit</button>
        {toggle.show && <button onClick={updateItem}>Update</button>}
      </form>
      <div className='long'>
        <ol>
          {items.map((item, index) => (
            <>
              <li key={index}>{item}</li>
              <button  className='btn' onClick={()=>DeleteItem(index)}>Delete</button>
              <button onClick={()=>{editItem(index)}}>Edit</button>
            </>
          ))}
        </ol>
      </div>
    </>
   );
}

export default App;










// import { useRef, useState } from 'react';
// import '../public/App.css';

// function App() {
//   let [toggle, setToggle]=useState({show:false,id:"" });
//   let editRef =useRef(null);
//   let [item, setItem]=useState('');
//   let [items, setItems]=useState([]);

//   let changeItem =(e)=>{
//     setItem(e.target.value);
//   };

//   let AddItem=(e)=>{
//     e.preventDefault();
//     setItems([...items, item]);
//     setItem("");
//   };

//   let DeleteItem=(id)=>{
//     let filteredItems =items.filter((item, index) => index !== id);
//     setItems(filteredItems);
//   };

//   let editItem = (id) => {
//     editRef.current.focus();
//     setToggle({ show: true, id });
//     setItem(items[id]);
//   };

//   let updateItem = () => {
//     setToggle({ show: false });
//     items[toggle.id] = item;
//     setItems([...items]);
//     setItem("");
//   };

//   return (
//     <>
//       <form>
//         <input type="text" onChange={changeItem} ref={editRef} placeholder="Enter the Value" />
//         <button type="submit" onClick={AddItem}>Submit</button>
//         {toggle.show && <button onClick={updateItem}>Update</button>}
//       </form>
//       <div className='long'>
//         <ol>
//           {items.map((item, index) => (
//             <>
//               <li key={index}>{item}</li>
//               <button className='btn' onClick={() => DeleteItem(index)}>Delete</button>
//               <button onClick={() => editItem(index)}>Edit</button>
//             </>
//           ))}
//         </ol>
//       </div>
//     </>
//   );
// }

// export default App;