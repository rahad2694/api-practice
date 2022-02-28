const dataBox = document.getElementById('data-box');
const spinner = document.getElementById('spinner');
const loadData = async() =>{
    spinner.classList.remove('d-none');
    dataBox.innerHTML='';
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json();
    showData(data);
}
const showData = (comments)=>{
    spinner.classList.add('d-none');
    comments.forEach(comment =>{
        // console.log(comment);
        const div = document.createElement('div');
        div.className="border border-danger rounded bg-light col-4 ";
        div.innerHTML=`
            <div onclick="showDetails(${comment.id})">
                <h1 class="text-center">Name: ${comment.name}</h1>
                <h3 class="text-center">Email: ${comment.email}</h3>
                <h4 class="text-center">ID: ${comment.id}</h4>
                <p class="text-center">Description: ${comment.body}</p>
            </div>
        `; 
        dataBox.appendChild(div);
    });
}

const showDetails = async(id) =>{
    // console.log(id);
    spinner.classList.remove('d-none');
    dataBox.innerHTML='';
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    const data = await res.json();
    // console.log(data);

    const div = document.createElement('div');
        div.className="border border-danger rounded bg-light col-12 ";
        div.innerHTML=`
            <div>
                <h1 class="text-center">Name: ${data.name}</h1>
                <h3 class="text-center">Email: ${data.email}</h3>
                <h4 class="text-center">ID: ${data.id}</h4>
                <p class="text-center">Description: ${data.body}</p>
            </div>
        `; 
        spinner.classList.add('d-none');
        dataBox.appendChild(div);
}