function cardMaker(data) {

    return `
    <div class="card">
        <div class="card-top">
            <h1 class="name">${data.getName()}</h1>
            <h1 class="role">${data.getRole()}</h1>
        </div>
        <div class="card-bottom">
            <h3 class="id">${data.name}</h3>
            <h3 class="email">${data.name}</h3>
            <h3 class="officeNumber">${data.name}</h3>
            <h3 class="github">${data.name}</h3>
            <h3 class="school">${data.name}</h3>
        </div>
    </div>
    `
}