let todolist=[];

$('#buttonAdd').on('click',()=>{
    let newtodo=document.getElementById("inputfield").value;
    if (newtodo.length != 0) {
        todolist.push(newtodo);
    }

    showList(todolist)         
})

let showList= (todolist) =>{
    $('#ullist').empty();
    todolist.forEach((it)=>{
        $('#ullist').append('<li>' + it + '<button class="libut"></button></il>');
    })
    
}
$('#ullist').on('click',()=>{
    var index = $('#ullist').index()
    console.log(index)
    todolist.splice(index, 1);
    todolist.forEach((it)=>{
        $('#ullist').append('<li>' + it + '<button class="libut"></button></il>');
    })
})