let button = document.querySelector('button')

let tbody = document.querySelector('tbody')

const fetchData = async()=>{

   const response = await fetch('https://jsonplaceholder.typicode.com/users')

 const data = await response.json()

  let table = ''

  data.forEach((item)=>{ 

      table+=`<tr>

      <td> ${item.id}</td>

      <td> ${item.name}</td>

    <td> ${item.username} </td>

     <td> ${item.email} </td>
    <td> ${item.address.city}  , ${item.address.street} , ${item.address.suite} ,  ${item.address.zipcode}</td>

     <td> ${item.phone}</td>

     <td> ${item.website}</td>

     <td>  ${item.company.name} ,  ${item.company.catchPhrase} ,  ${item.company.bs}</td>

    </tr>`

tbody.innerHTML = table
});

};

button.addEventListener("click", fetchData)