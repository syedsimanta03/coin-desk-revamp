var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line', // also try bar or other graph types

  // The data for our dataset
  data: {
    labels: [
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
      'Feb',
      'May'
    ],
    // Information about the dataset
    datasets: [
      {
        label: 'Bitcoin',
        borderColor: 'royalblue',
        data: [26.4, 39.8, 66.8, 66.4, 40.6, 55.2, 77.4, 76, 110.8, 142.6]
      }
    ]
  },

  // Configuration options
  options: {
    layout: {
      padding: 10
    },
    legend: {
      position: 'bottom'
    }
  }
});
