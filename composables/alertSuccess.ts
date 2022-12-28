
import Swal from "sweetalert2";
export default function(message:string){

    const alertmessage=()=>{
        Swal.fire({
            icon: "success",
            title: "Super",
            text: message,
          });
    }
    return alertmessage();
}