const addBtn=document.getElementById('add')

addBtn.addEventListener('click', ()=>{
    addNewNote();
});
function addNewNote(){
    const note=document.createElement("div");
    note.classList.add('note');
        note.innerHTML=`<div class="notes">
                            <div class="tools">
                                <button class="edit"><i class="fa fa-save"></i></button>
                                <button class="delete"><i class="fa fa-trash"></i></button>
                            </div>
                            <div class="main hidden"></div> 
                            <textarea></textarea> 
                        </div>`
    const editBtn=note.querySelector('.edit');
    const deleteRbtn=note.querySelector('.delete');

    const main=note.querySelector('.main');
    const textarea=note.querySelector('textarea');

    editBtn.addEventListener('click', ()=>{
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    });
    deleteRbtn.addEventListener('click', ()=>{
        note.remove();
    });

    textarea.addEventListener('input', (e)=>{
        const { value }=e.target;
        main.innerHTML=marked(value);
});

document.body.appendChild(note);


}

