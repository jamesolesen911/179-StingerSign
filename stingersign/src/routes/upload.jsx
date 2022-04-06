import "../upload.css";


//export const routes upload = ({}) => {
export default function Upload() {

    return(
        <form method="post" action="#" id="#">
           
              
              
              
        <div 
        className="form-group files">
          <label>Upload Your File </label>
          <input type="file" className="form-control" multiple=""/>
        </div>
        
      <button>Submit</button>
    </form> 
    )
}