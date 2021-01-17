
    // By default, submit buttons are disabled
   let button = document.querySelectorAll(".submit");
    button.forEach((button) => {
      button.disabled = true;
    })
  
    //----------------------------------- Dayly activity - button ---------------------------------------------
      
      document.querySelector('#activity_d').onkeyup = () => {
        if (document.querySelector('#activity_d').value.length > 0) {
          document.querySelector('#sub_d').disabled = false;
        } else {
          document.querySelector('#sub_d').disabled = true;
        }
      }
      
      

      document.querySelector('#dayly_form').onsubmit=()=>{

        document.querySelector('#sub_d').disabled = true;
  
          return false;
      }
  
    // ----------------------------------Weekly activity - creating an activity -------------------------------------------
  
   /*  document.querySelector('#activity_w').onkeyup = () => {
      if (document.querySelector('#activity_w').value.length > 0) {
        document.querySelector('#sub_w').disabled = false;
      } else {
        document.querySelector('#sub_w').disabled = true;
      }
    } 
  
        document.querySelector('#weekly_form').onsubmit=()=>{
             
            document.querySelector('#sub_w').disabled = true;
          return false;
        }   */