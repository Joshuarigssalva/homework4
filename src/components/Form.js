import React, { Component } from "react";

class Form extends Component {
  render() {
    const { handleSubmit, setWebName, webName, link, setLink } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <div>
          
        <div>Name of Website</div>

        <input value={webName}
        onChange={(event) => setWebName(event.target.value)}
        type="webName" name="array" style={{width:'25%'}}/>

        </div>

        <div>URL</div>

        <div>

        <input value={link}
        onChange={(event) => setLink(event.target.value)}
        type="link" name="link" style={{width:'25%'}}/>

        </div>
        
        <button type ="submit"
        style={{
          backgroundColor: 'lightblue',
          color: 'black',
          fontSize: '12px',
          fontWeight:'bold',
          padding:'5px',
          cursor:'pointer',
          width:'70px',
          borderRadius:'5px',
          height:'35px'
        }}
        >Submit</button>

      </form>
    );
  }
}

export default Form
