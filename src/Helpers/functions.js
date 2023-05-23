import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function showAlert(message,icon){
    
    const mySwal = withReactContent(Swal);
    mySwal.fire({   
        title: message,
        icon: icon,

});
}

