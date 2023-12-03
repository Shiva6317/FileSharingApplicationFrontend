import logo from './abd2.jpg'
import { useRef, useState, useEffect } from "react";
import './App.css'
import { uploadfile } from './services/api';
function App() {
  const fileinputref = useRef();
  const [file, setfile] = useState('');
  const [fileurl,setfileurl]=useState('');

  //this is a function which is refrense same work to another
  const onuploadclick = () => {
    fileinputref.current.click();
  }

  useEffect(() => {

    const uploadFile =async () => {
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);
        //this is api call function 
        let response=await uploadfile(data);
        setfileurl(response.path);
        console.log('response generated',response);


      }

    }
    uploadFile();
  }, [file])


  return (
    <div className="container">
      <img className="logo" src={logo} alt="" />
      <div className="second-part ">

        <div className="file-part">


          <h1>Filex Sharing Application</h1>


          <p>Upload and share file link</p>

          <button onClick={() => { onuploadclick() }}>Upload File</button>


          <input type="file"

            ref={fileinputref}
            style={{ display: "none" }}
            onChange={(e) => { setfile(e.target.files[0]) }}

          />

         <a className="a-tag" href={fileurl}>pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp</a>

        </div>

        <div className='footer-ownername'>
          <p><span>$</span>hivjeet</p>
          <p>kali30.nethunter02@gmail.com</p>
          <p><span>(+91)</span>9559737241</p>
        </div>
      </div>


    </div>
  );
}

export default App;
