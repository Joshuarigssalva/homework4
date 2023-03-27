import { useState } from 'react'
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {
  const [array, setArray] = useState([]);
  const [webName, setWebName] = useState('');
  const [link, setLink] = useState('');
  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
       
       const removeArray = [...array];
       removeArray.filter((value, i) => i !== index);
       setArray(removeArray);
       
  }

  const handleSubmit = (favLink) => {

    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
       if (webName != '' && link != '') {
        const linkobject = {webName:webName, link:link};
        setArray([...array, linkobject]);
        setWebName('');
        setLink('');
       }
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      {/*TODO - Add Table Component */
      <Table removeLink = {handleRemove} linkData = {array}/>
      }

      <br />

      <h3>Add New</h3>
      {/*TODO - Add Form Component */}
      
    </div>
  )
}

export default LinkContainer
