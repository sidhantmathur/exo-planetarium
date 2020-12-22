import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import { Radar } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'

class PlanetGraph extends Component {
  constructor () {
    super()
    this.state = {
      planets: null
    }
  }

  // componentDidMount () {
  //   const { name, orbit, orbitPeriod, temp, radiusE, massE, density, discovered } = this.props

  //   const data = {
  //     labels: ['Orbit', 'Orbit Period',
  //       'Temperature', 'Radius in Earths', 'Mass in Earths',
  //       'Density', 'Discovered'],
  //     datasets: [
  //       {
  //         label: name,
  //         backgroundColor: 'rgba(75,192,192,1)',
  //         borderColor: 'rgba(0,0,0,1)',
  //         borderWidth: 2,
  //         data: [orbit, orbitPeriod, temp, radiusE, massE, density, discovered]
  //       }
  //     ]
  //   }
  // }

  render () {
    const { name, orbit, orbitPeriod, radiusE, massE } = this.props

    const size = {
      labels: ['Radius (Earths)', 'Mass (Earths)'],
      datasets: [
        {
          label: name,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [radiusE, massE]
        }
      ]
    }

    const data = {
      labels: ['Orbit (AUs)', 'Orbit Period (days)', 'Radius (Earths)', 'Mass (Earths)', 'Density (g/cm**3)'],
      datasets: [
        {
          label: name,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [orbit, orbitPeriod, radiusE, massE]
        }
      ]
    }

    console.log(data)

    return (
      <div>
        <Bar
          data={size}
          options={{
            title: {
              display: true,
              text: 'Planet Size',
              fontSize: 20
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    suggestedMin: 0
                  }
                }
              ]
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
    )
  }
}

export default withRouter(PlanetGraph)

// const { name, orbit, orbitPeriod, temp, radiusE, massE, density, discovered } = this.props

// const data = {
//   labels: ['Orbit', 'Orbit Period',
//     'Temperature', 'Radius in Earths', 'Mass in Earths',
//     'Density', 'Discovered'],
//   datasets: [
//     {
//       label: name,
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: [orbit, orbitPeriod, temp, radiusE, massE, density, discovered]
//     }
//   ]
// }

// export default class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <Bar
//           data={data}
//           options={{
//             title: {
//               display: true,
//               text: 'Average Rainfall per month',
//               fontSize: 20
//             },
//             legend: {
//               display: true,
//               position: 'right'
//             }
//           }}
//         />
//       </div>
//     )
//   }
// }
