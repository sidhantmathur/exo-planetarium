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
    const { name, orbit, orbitPeriod, radiusE, massE, stRad, stMass } = this.props

    const size = {
      labels: ['Radius', 'Mass'],
      datasets: [
        {
          label: name,
          backgroundColor: '#38B2AC',
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

    const stSize = {
      labels: ['Radius', 'Mass'],
      datasets: [
        {
          label: name + '\'s Star Size',
          backgroundColor: '#9F7AEA',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [stRad, stMass]
        }
      ]
    }

    console.log(stRad)

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
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Earths'
                  }
                }
              ]
            },
            legend: {
              display: false,
              position: 'right'
            }
          }}
        />
        {(stRad || stMass) ? (
          <Bar
            data={stSize}
            options={{
              title: {
                display: true,
                text: 'Star Size',
                fontSize: 20
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      suggestedMin: 0
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Suns'
                    }
                  }
                ]
              },
              legend: {
                display: false,
                position: 'right'
              }
            }}
          />
        ) : ''}

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
