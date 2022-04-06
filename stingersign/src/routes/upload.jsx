import "../upload.css";


//export const routes upload = ({}) => {
export default function Upload() {

    return(
        <form method="post" action="#" id="#">
           
              
              
              
        <div 
        class="form-group files">
          <label>Upload Your File </label>
          <input type="file" class="form-control" multiple=""/>
        </div>
        
      <button>Submit</button>
    </form> 
    )
}