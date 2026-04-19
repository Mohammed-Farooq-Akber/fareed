document.getElementById("intakeForm").addEventListener("submit", async(e)=>{
e.preventDefault();
const formData=new FormData(e.target);
await fetch("/api/intake",{method:"POST",body:formData});
alert("Submitted");
});