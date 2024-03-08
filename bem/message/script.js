const toastsELe = document.querySelector("#toasts");

function manualDeleteToast(toastELe) {
    toastELe.onclick = function (e) {
        const closeELe = e.target.closest(".toast__close");
        if (closeELe) {
            toastELe.remove();
        }
    }

}

function autoDeleteToast(toastELe, duration) {
    const idTimeOut = setTimeout(function () {
        toastELe.remove();
    }, duration);

    if (!toastELe) {
        clearTimeout(idTimeOut);
    }

}

function createToast(toast) {
    if (!toastsELe) {
        return
    }
    const toastELe = document.createElement("div");

    toastELe.classList.add(toast.className, "toast");
    toastELe.innerHTML = `
        <div class="toast__icon"><i class="${toast.icon}"></i></div>
        <div class="toast__body">
            <h3 class="toast__title">${toast.title}</h3>
            <div class="toast__desc">${toast.desc}</div>
        </div>
        <div class="toast__close"><i class="fa-solid fa-xmark"></i></div>
    `;
    toastELe.style.animation = "slideRight ease-in-out 0.5s, vanishing linear 3s forwards";
    toastsELe.appendChild(toastELe);
    autoDeleteToast(toastELe, toast.duration);
    manualDeleteToast(toastELe);
}


//  <!-- danger -->
//     <div class="toast toast--danger">
//             <div class="toast__icon"><i class="fa-solid fa-exclamation"></i></div>
//         <div class="toast__body">
//             <h3 class="toast__title">Danger</h3>
//             <div class="toast__desc">Anyone with access can view your invited visitors</div>
//         </div>
//             <div class="toast__close"><i class="fa-solid fa-xmark"></i></div>
//     </div>