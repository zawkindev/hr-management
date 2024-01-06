function generateNumberOfEmployeesGraph(graphsTag) {
  const graphsElement = document.createElement("div")
  graphsElement.setAttribute("class", `w-[${filter(employees, "department").length + 1}00px] h-96 bg-slate-950 rounded-xl`)
  const canvasElement = document.createElement("canvas")
  canvasElement.setAttribute("id", "numberOfEmployees")
  graphsElement.appendChild(canvasElement)
  graphsTag.appendChild(graphsElement)
  const canvas = document.getElementById("numberOfEmployees")
  const ctx = canvas.getContext('2d');


  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: filter(employees, "department"),
      datasets: [{
        label: 'Number of Employees',
        data: getNumberOfEmployeesInDepartments(employees),
        backgroundColor: ["#ebfdf0", "#b6c9b9"],
        borderRadius: 30,
        borderSkipped: false,
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "#fff"
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Employees',
            color: "#fff",
          },
          ticks: {
            color: '#fff' // Change font color for X-axis tick labels
          }
        },
        x: {
          title: {
            display: true,
            text: 'Department',
            color: "#fff"
          },
          ticks: {
            color: '#fff' // Change font color for X-axis tick labels
          }
        },

      },
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

function generateNumberOfGenders(graphsTag) {
  const graphsElement = document.createElement("div")
  graphsElement.setAttribute("class", "w-[300px] h-96 bg-slate-950 rounded-xl")
  const canvasElement = document.createElement("canvas")
  canvasElement.setAttribute("id", "numberOfGenders")
  graphsElement.appendChild(canvasElement)
  graphsTag.appendChild(graphsElement)
  const canvas = document.getElementById("numberOfGenders")
  const ctx = canvas.getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Females", "Males"],
      datasets: [{
        label: 'Number of Males and Females',
        data: countGenders(employees),
        backgroundColor: ["#ebfdf0", "#b6c9b9"],
        borderRadius: 30,
        borderSkipped: false,
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "#fff"
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Males and females',
            color: "#fff",
          },
          ticks: {
            color: '#fff' // Change font color for X-axis tick labels
          }
        },
        x: {
          title: {
            display: true,
            text: 'Gender',
            color: "#fff"
          },
          ticks: {
            color: '#fff' // Change font color for X-axis tick labels
          }
        },

      },
      responsive: true,
      maintainAspectRatio: false
    }
  });
}


function genereateAverageAges(graphsTag) {
  const graphsElement = document.createElement("div")
  graphsElement.setAttribute("class", `w-[${filter(employees, "department").length + 1}00px] h-96 bg-slate-950 rounded-xl`)
  const canvasElement = document.createElement("canvas")
  canvasElement.setAttribute("id", "averageAges")
  graphsElement.appendChild(canvasElement)
  graphsTag.appendChild(graphsElement)
  const canvas = canvasElement
  const ctx = canvas.getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: filter(employees, "department"),
      datasets: [{
        label: 'Average age of employees',
        data: getAverageAgeByDepartment(employees),
        backgroundColor: ["#ebfdf0", "#b6c9b9"],
        borderRadius: 30,
        borderSkipped: false,
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "#fff"
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Age',
            color: "#fff",
          },
          ticks: {
            color: '#fff' // Change font color for X-axis tick labels
          }
        },
        x: {
          title: {
            display: true,
            text: 'Department',
            color: "#fff"
          },
          ticks: {
            color: '#fff' // Change font color for X-axis tick labels
          }
        },

      },
      responsive: true,
      maintainAspectRatio: false
    }
  });
}
