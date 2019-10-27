database.collection('teacher').get().then((data)=>{
// console.log(data);
const table = document.querySelector('table');
data.forEach(element => {
    // console.log(element.data().name);
    table.innerHTML +=`
    <tr>
         <td>${element.data().name}</td>
         <td>${element.data().age}</td>
         
         <td>
         <i class="material-icons text-danger"
         
         style="cursor:pointer"
         id="${element.id}" onclick="deleteTeacher('${element.id}')"
         >delete</i>
         
         
         </td>
    </tr>
    `;
});
});
function deleteTeacher(teaId){
    database.collection('teacher').doc(teaId).delete();
}

const btnAdd = document.querySelector('button');
btnAdd.addEventListener('click',function(){
    var name = document.getElementById('name').value; 
    var age = document.getElementById('age').value; 
    database.collection('teacher').add({
        name:name,
        age:age
    });
});