var ctx = document.getElementById('myChartt').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar', // also try bar or other graph types

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
        label: 'Etherium',
        borderColor: 'royalblue',
        data: [33.4, 55.8, 66.8, 66.4, 40.6, 77.7, 77.4, 76, 110.8, 144.1]
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
