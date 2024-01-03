function createCardElement() {
    const div = document.createElement("div")
    div.setAttribute("class", "w-72 h-72 p-5 flex flex-col justify-between text-sky-50 rounded-lg bg-gradient-to-br from-slate-950 to-slate-800")
    div.innerHTML = `
   <div class="flex self-end">
      <span class="icon-man text-sky-50 text-7xl"></span>
   </div>
   <div class="flex flex-col gap-3">
      <p class="block text-2xl">
        The number of men
      </p>
      <span class="block font-bold text-6xl">
        544
      </span>
   </div>
   `
    return div

}