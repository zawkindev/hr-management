function createTableElement(employees) {
    const table = document.createElement("table");
    table.setAttribute("class", "text-left table-auto w-6/12 rounded-lg overflow-hidden");

    // Table header
    table.innerHTML = `
    <thead>
        <tr class="bg-slate-950 text-sky-50 font-bold">
          <th class="p-4">
            <p class="block  antialiased font-bold leading-none opacity-70">
              Name
            </p>
          </th>
          <th class="p-4">
            <p class="block antialiased font-bold leading-none opacity-70">
              Gender
            </p>
          </th>
          <th class="p-4">
            <p class="block antialiased font-bold leading-none opacity-70">
              Age
            </p>
          </th>
          <th class="p-4">
            <p class="block antialiased font-bold leading-none opacity-70">
              Department
            </p>
          </th>
          <th class="p-4">
            <p class="block antialiased font-bold leading-none opacity-70">
              Position
            </p>
          </th>
          <th class="p-4">
            <p class="block antialiased font-bold leading-none opacity-70">
              Birthday
            </p>
          </th>
          <th class="p-4">
            <p class="block antialiased font-bold leading-none opacity-70">Actions</p>
          </th>
        </tr>
      </thead>
      <tbody class="border border-gray-200">
    `;

    // Table body with employee data
    if (employees.length===0 || employees[0] === undefined){
        table.innerHTML += `
        <tr class="bg-slate-50">
          <td class="p-4">
            <p class="block antialiased font-normal leading-normal">
            empty
            </p>
          </td>
          <td class="p-4">
            <p class="block antialiased font-normal leading-normal">
            empty
            </p>
          </td>
          <td class="p-4">
            <p class="block antialiased font-normal leading-normal">
            empty
            </p>
          </td>
          <td class="p-4">
            <p class="block antialiased font-normal leading-normal">
            empty
            </p>
          </td>
          <td class="p-4">
            <p class="block antialiased font-normal leading-normal">
            empty
            </p>
          </td>
          <td class="p-4">
            <p class="block antialiased font-normal leading-normal">
            empty
            </p>
          </td>
          <td class="p-4  items-center content-center gap-7 h-max">
          none
          </td>
        </tr>
        `
    }else {
        employees.forEach((user, index) => {
            table.innerHTML += `
        <tr id="${user.id}" class="${index % 2 !== 0 ? 'bg-slate-50' : 'bg-slate-100'}">
          <td class="p-4">
            <p class="block antialiased font-normal leading-normal">
              ${user.name}
            </p>
          </td>
          <td class="p-4">
            <p class="block antialiased font-normal leading-normal">
              ${user.gender}
            </p>
          </td>
          <td class="p-4">
            <p class="block antialiased font-normal leading-normal">
              ${user.age}
            </p>
          </td>
          <td class="p-4">
            <p class="block antialiased font-normal leading-normal">
              ${user.department}
            </p>
          </td>
          <td class="p-4">
            <p class="block antialiased font-normal leading-normal">
              ${user.position}
            </p>
          </td>
          <td class="p-4">
            <p class="block antialiased font-normal leading-normal">
              ${user.birthday}
            </p>
          </td>
          <td class="p-4  items-center content-center gap-7 h-max">
            <button onclick="renderEditForm(${user.id})" class="edit-button block antialiased font-medium leading-normal text-blue-500">Edit</button>
            <button class="block antialiased font-medium leading-normal text-red-500">Delete</button>
          </td>
        </tr>
        `;
        });
    }
    // Close the table
    table.innerHTML += `</tbody></table>`;

    return table;
}