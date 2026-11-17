function deletePost(event) {
    var deleteCard = event.parentNode.parentNode
    deleteCard.remove()
}
function post() {
    var title = document.getElementById("title")
    var descript = document.getElementById("description")
    postContainer = document.getElementById("postcontainer")
    if (title.value.trim() && descript.value.trim()) {
        postContainer.innerHTML += `
    <div class="card postcard m-3" id="cardBody">
    <div class="card-header bgcolor">
      @Blog
    </div>
    <div class="card-body">
      <figure>
        <blockquote class="blockquote">
          <p>${title.value}</p>
        </blockquote>
        <figcaption class="blockquote-footer">
        <em> ${descript.value}</em>
        </figcaption>
      </figure>
    </div>
    <div class="ms-auto m-2">
        <button class="btn bgcolor editbtn text-light px-4" id="editBtn" onclick="editPost(this)">Edit</button>
        <button class="btn btn-danger" onclick="deletePost(this)">Delete</button>
         </div>
  </div>`
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Title & description can't be empty",
        });
    }
    title.value = ""
    descript.value = ""
}
function editPost(event) {
    var mainCard = event.parentNode.parentNode;
    var cardBody = mainCard.getElementsByClassName('card-body')[0];
    var currentTitle = cardBody.getElementsByTagName('p')[0].innerText;
    var currentDesc = cardBody.getElementsByTagName('em')[0].innerText;
    document.getElementById("title").value = currentTitle;
    document.getElementById("description").value = currentDesc;
    mainCard.remove();
}