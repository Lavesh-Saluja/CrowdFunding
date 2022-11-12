// import {Form,SendTransaction} from "web3uikit";
// // import { contractData } from '/contractData';
// import {useNotification } from 'web3uikit';
import  React,{useState} from 'react';
import { createContext } from 'react';
// import { Toast } from 'react-toastify/dist/components';
import {TailSpin }from  'react-loader-spinner'
// import { create } from 'ipfs-http-client';
import { Web3Storage, getFilesFromPath } from 'web3.storage'
import { toast } from 'react-toastify';
import token from '../../utils/variables';
import { isAddress } from 'ethers/lib/utils';
import { ethers } from 'ethers';
import ProjectFactory from "../../artifacts/contracts/Projects.sol/ProjectFactory.json"





const FormsLayout= createContext()



const client = new Web3Storage({ token })
 
  const Forms=()=>{
    
    
      
      
      
    const [loading,setLoading] =useState(false)
    const [address,setAddress]= useState("")
   


    const [upload,setUpload]=useState(false)
    const[uploaded,setUploaded]= useState(false)
    
    const  [form,setForm]= useState({
      projectTitle:"",
      projectDescription:"",
      requiredAmount:"",
      category:"other"
     

    })

    const[image,setImage]= useState('');
    const [imgURI,setImagrUri]= useState('')
    // const dispatch = useNotification();
    // const [title,setTitle]=useState("") ;
    // const [maxfund,setMaxfund]=useState(0) ;
    // const [category,setCategory]=useState("") ;
    // const [description,setDescription]=useState("") ;

    const [brochure,setBrochureUri]=useState('')


    const ImageHandler=(e)=>{
      setImage(e.target.files[0])
      setImagrUri(e.target.files[0])
      setBrochureUri(e.target.files[0])
    }

    // function createContract(event) {
    //     console.log(event.data[0].inputResult);
    //     setTitle ( event.data[0].inputResult);
    //      setMaxfund(event.data[1].inputResult);
    //     setCategory (event.data[2].inputResult);
    //      setDescription ( event.data[3].inputResult);
    //     console.log(title+"\n"+maxfund+"\n"+category+"\n"+description);
    //     //Creating a Contracto
    // }


  const uploadFiles=async(e)=>{
e.preventDefault();
setUpload(true);

if(brochure!=='' && imgURI !==''){


try {
  toast.success("Files uploded successfully")
  console.log("entered the function")
  const files = await getFilesFromPath(brochure)
   const  brochureCid=  await client.put(files )
   const imgPath=await getFilesFromPath(imgURI)
   const imgCid= await client.put(imgPath)
// const added = await client.add(brochure)
// setBrochureUri(added.path)
// const addedimg= await client.add(imgURI)
//setImagrUri(addedimg.path)
console.log(brochureCid,imgCid)
console.log("exit")
}
catch(error){
  console.log("failure")
  console.log(error)
  toast.warn("error in upload")
}
console.log("out")
 setUpload(false)
 setUploaded(true)

 toast.success("Files uploded successfully")


}

}


const createContract = async(e)=>{

e.preventDefault()
const provider= new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()

if(form.projectTitle==''){
  console.log("title is empty");

}else if(form.projectDescription==''){
  console.log("description is empty");

}else if(form.requiredAmount==''){
  console.log("amount is empty");

}else if(uploaded == false){
  console.log("upload required");

}else{
  setLoading(true)
}


const contract = new ethers.Contract(
  process.env.CONTRACT_PUBLIC_ADDRESS,
  ProjectFactory.abi,
  signer

)

console.log ("Starting a new campaign.......")
const ProjectData = await contract.createProject(
  form.projectTitle,
  parseInt(form.requiredAmount),
  image,
  form.projectDescription,
  form.category,

)
 
await ProjectData.wait()

setAddress(ProjectData.to)

}



  


    const formHandler=(e)=>{
setForm({

  ...form,
  [e.target.name]:e.target.value
})
  console.log(form)
    }


 
    return (
    <FormsLayout.Provider value={{form,setForm,image,setImage,ImageHandler,formHandler}}>
    <>
   {loading ===true?
    address!==""?
   (<div>
   <TailSpin color='white' height={60}/>:
   </div>)
    :(<div>
      <h1>Project  Started  successfully</h1>
      <button>Go to Campaign</button>
      </div>
    )
    
    :
     <div>
  <label>Project Title</label>
    <input  value={form.projectTitle} onChange={formHandler} placeholder="Project title"  name="projectTitle" type="text" />
    <label>Project Description</label>
    <textarea value={form.projectDescription}  onChange={formHandler}name='projectDescription'></textarea>
    <label>Required Amount</label>
    <input value={form.requiredAmount} onChange={formHandler} placeholder="Project title" name='requiredAmount' type="number" />
    <label>Choose category</label>
    <option>Technology</option>
    <option>Finance</option>
    <option>Health</option>
    <option>other</option>

    <label>Select image</label>
    <input  onChange={ImageHandler} type="file"/>

    <label>Select brochure</label>
    <input type="file"  onChange={ImageHandler}/>

    {upload?<TailSpin color='white' height={30}/>:
     uploaded==false?<button onClick={uploadFiles}>Upload files to ipfs</button>:<button>Files Uploaded to ipfs  </button>
    }

    <button onClick={createContract}>Start Fund Raising</button>
    </div>}





     
    </>
    </FormsLayout.Provider>);
  }
  export default Forms
  export {FormsLayout}