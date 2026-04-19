document.getElementById("intakeForm").addEventListener("submit",async(e)=>{
e.preventDefault();
const fd=new FormData(e.target);
await fetch("/api/intake",{method:"POST",body:fd});
alert("Submitted");
});