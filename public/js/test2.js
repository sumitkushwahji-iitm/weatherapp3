

const { SerialPort } = require('serialport')

const serialport = new SerialPort({ path: 'COM6', baudRate: 19200 })

let dataArray = ''

// Serial port opened and fetched data
serialport.on('data', data => {
  dataArray += data.toString()
})

// Log the concatenated data every second
setInterval(() => {
  const lines = dataArray.split('\n') // Split the string into an array of lines
  lines.forEach(line => {
    const fields = line.split(',') // Split the line into an array of fields
    const fifthData = fields[4] // Access the 5th field (index 4)
    const eighthData = fields[7] // Access the 8th field (index 7)
    console.log('Received data - PRN:', fifthData, 'SNR:', eighthData, line)
  })
}, 1000) // Add a closing parenthesis here
