// const deleteModal = document.querySelector("#delete-modal")
const deleteBtn = document.querySelector(".delete-btn")

function openModal(modalID, userID) {
    const modal = document.getElementById(modalID)
    const modalBody = document.querySelector(".modal-body")
    modal.classList.remove("hidden")
    deleteBtn.addEventListener("click",()=>{
       deleteEmployee(userID)
       closeModal(modalID)
    })

    modal.addEventListener("click",(e)=>{
        const clickedElement = e.target;
        if (!clickedElement.closest(".modal-body")) {
            closeModal(modalID)
        }
    })


    if (modalID==="edit-modal"){
        renderEditForm(userID)
    }
}

function closeModal(modalID) {
    const modal = document.getElementById(modalID)
    modal.classList.add("hidden")
}


