import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import AddUserForm from '../forms/AddUserForm.js';
import UserTable from '../tables/UserTable.js';
let namez;
// export Text extends React.Component = props => {
//     const [user, setUser] = useState('');
//     const downloadTxtFile = user => {
//       const element = document.createElement("a");
//       const file = new Blob([document.getElementById('myInput').value], {type: 'text/plain'});
//       element.href = URL.createObjectURL(file);
//       element.download = "myFile.txt";
//       document.body.appendChild(element); // Required for this to work in FireFox
//       element.click();
//
//     }
export function Text(props) {
  const [name,getname] = useState('');
  const [username,getusername] = useState('');

  const downloadTxtFile =props => {
    getusername(username);
    getname(name);
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('myInput')], {type: 'text/plain'});

    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();

  }
    return (
      <div>


        <button onClick={()=>downloadTxtFile(<UserTable value="[...Object.values(this)]"/>)}>CLICK</button>

      </div>
    );

}
