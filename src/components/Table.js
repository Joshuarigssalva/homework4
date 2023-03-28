import React from 'react'

// const TableHeader = () => {
//   // boilerplate table header functional component
//   return (
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>URL</th>
//         <th>Remove</th>
//       </tr>
//     </thead>
//   )
// }

// const TableBody = ({linkData, removeLink}) => {
//   // boilerplate table body functional component
//   // we use Array.map to create table rows from LinkData passed via props
//   const rows = linkData.map((row, index) => {
//     return (
//       <tr key={index}>
//         <td>{row.name}</td>
//         <td>
//           <a href={row.URL}>{row.URL}</a>
//         </td>
//         <td>
//           <button type="submit" onClick={() => removeLink(index)}>Delete</button>
//         </td>
//       </tr>
//     )
//   })

//   return <tbody>{rows}</tbody>
// }

// const Table = (linkData, removeLink) => {
//   {
//     /*TODO - return <table> component, TableHeader and TableBody  and pass props!*/
//     return <table>
//       <TableHeader/>
//       <TableBody linkData={linkData} removeLink={removeLink}/>
//     </table>
//   }
// }

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <thead>
      <tr>
      <td>Name</td>
      <td>URL</td>
      <td>Remove</td>
      </tr>
    </thead>
  )
}

const TableBody = ({linkData,removeLink}) => {
  // boilerplate table body functional component
  // we use Array.map to create table rows from LinkData passed via linkData
  const rows = linkData.map((row, index) => {
    return (
      <tr key={index} style={{border: "5px solid grey" }}>
        <td style={{padding:'15px 0px'}}>{row.webName}</td>
        <td style={{padding:'15px 0px'}}>
          <a style={{color:'blue'}} href={row.link} target='_blank'>{row.link}</a>
        </td>
        <td width={'15%'} style={{padding:'0px 0px'}}>
        <button type="submit"
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
              onClick={() => removeLink(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = ({linkData,removeLink}) => {
  {
    /*TODO - return <table> component, TableHeader and TableBody  and pass props!*/
    return<div>
    <table style={{width:'50%',borderCollapse:'collapse'}}>
      <TableHeader/>
      <TableBody linkData={linkData} removeLink={removeLink}/>
    </table>
    </div> 
  }
}


export default Table
