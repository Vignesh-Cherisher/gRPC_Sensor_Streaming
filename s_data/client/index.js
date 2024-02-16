const grpc = require('@grpc/grpc-js');
const fs = require('fs');
const {StreamRequest} = require('../proto/s_data_pb.js');
const {SensorServiceClient} = require('../proto/s_data_grpc_pb.js');
const {DATA} = require('../../constants.js');

function streamSensorData(rate, client) {
  console.log('streamSensorData was invoked');
  const streamRequest = { rate };
  const call = client.StreamSensorData(streamRequest);

  call.on('data', (data) => {
    console.log('Received data: ', data);
  });

  call.on('end', () => {
    console.log('Stream ended by the server.');
  });

  return call;
}

function main() {
  const tls = false;
  let creds;

  if (tls) {
    const rootCert = fs.readFileSync('./ssl/ca.crt');
    creds = grpc.ChannelCredentials.createSsl(rootCert);
  } else {
    creds = grpc.ChannelCredentials.createInsecure();
  }
  const client = new sensorProto.SensorService(
    'localhost:50051', 
    grpc.credentials.createInsecure()
  );

  const call = streamSensorData(1, client); // Start with 50 messages per second
  // Example of changing the rate to 30 messages per second after 10 seconds
  setTimeout(() => {
    call.cancel()
    streamSensorData(2, client); // Request a new stream with a different rate
  }, 2000);
  setTimeout(() => {
    console.log('Aborting...');
  },4000)
}

main();
