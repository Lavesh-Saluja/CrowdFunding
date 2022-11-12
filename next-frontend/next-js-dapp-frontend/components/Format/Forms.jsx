import {Form,SendTransaction} from "web3uikit";
import { contractData } from '/contractData';
import {useNotification } from 'web3uikit';
import  React,{useState} from 'react';




  const Forms=()=>{
    const [title,setTitle]=useState("") ;
    const [maxfund,setMaxfund]=useState(0) ;
    const [category,setCategory]=useState("") ;
    const [description,setDescription]=useState("") ;

    function createContract(event) {
        console.log(event.data[0].inputResult);
        setTitle ( event.data[0].inputResult);
         setMaxfund(event.data[1].inputResult);
        setCategory (event.data[2].inputResult);
         setDescription ( event.data[3].inputResult);
        console.log(title+"\n"+maxfund+"\n"+category+"\n"+description);
        //Creating a Contract
    }


 
    return (<>
      <Form className="bg-black"
        buttonConfig={{
          onClick: function createContract(){},
          theme: 'primary'
        }}
        data={[
          {
            inputWidth: '50%',
            name: 'Title of Organization',
            type: 'text',
            value: ''
          },
          {
            inputWidth: '50%',
            name: 'Required Fund For Organization',
            type: 'tel',
            value: ''
          },
          {
            inputWidth: '50%',
            name: 'Category of Organization',
            type: 'text',
            value: ''
          },
          {
            inputWidth: '50%',
            name: 'Description Of Organization',
            type: 'textarea',
            value: ''
          },
          {
            inputWidth: '50%',
            name: 'Image',
            type: 'file',
            value: ''
          },
      ]}
          onSubmit={createContract}
          title="Details of Organization"
      />

    </>);
  }
  export default Forms