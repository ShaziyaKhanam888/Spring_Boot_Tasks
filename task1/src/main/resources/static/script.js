 function saveUser() {

         const user = {
             name: document.getElementById("name").value,
             email: document.getElementById("email").value
         };

         fetch("http://localhost:8080/api/users", {
             method: "POST",
             body: JSON.stringify(user),
             headers: { "Content-Type": "application/json" }
         })
         .then(res => res.json())
         .then(data => {
             document.getElementById("result").innerText = "User Saved Successfully!";
         })
         .catch(err => console.log(err));
     }