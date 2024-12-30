const ctx2 = document.getElementById('doughnut');

  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Civil Engineering','Information of Technology', 'Nursing', 'Stat', 'Computer Applications', 'Civil drafting', 'Ayiiieeee', 'awdawdawdaw', 'awdadadadwadss'],
      datasets: [{
        label: 'Number of Enrollees',
        data: [12, 19, 3, 5, 2, 3,2,5,1],
        backgroundColor: [
         'rgba(255,99,132, 0.9)',
          'rgba(54,162,235, 0.9)',
          'rgba(112,206,86, 0.9)',
          'rgba(75,192,199, 0.9)',
          'rgba(75,10,122, 0.9)',
          'rgba(0,0,211, 0.9)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });