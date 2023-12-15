import './App.css';
// import elephant from "./images/elephant.jpeg";

function App(data) {
  // code here
  const i_data = data.imageData();
  return(
    <>
    <h2 className='header'>Image Gallery</h2>
     <div className='container'>
        {i_data.map((data)=>{
          return(
            <img key={data.id} src={data.img} alt='elephant'/>
          )
        })}
    </div>
  </>
  )
}

export default App;

