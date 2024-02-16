const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('C:/Users/vignesh.muruganandan/Documents/Frontend/gRPC/Trial/sensor_data/proto/sensor_data.proto', {});
const sensorProto = grpc.loadPackageDefinition(packageDefinition).sensor;

const server = new grpc.Server();

let currentRate = 50; // messages per second

// Implement the StreamSensorData RPC method
server.addService(sensorProto.SensorService.service, {
  StreamSensorData: (call, callback) => {
    const requestedRate = call.request.rate || currentRate;
    currentRate = requestedRate;
    let intervalId = setInterval(() => {
      if (call.cancelled) {
        console.log('reached');
        clearInterval(intervalId);
        call.end();
        return;
      }
      // Generate and send sensor data
      const sensorData = {
        timestamp: Date.now(),
        sensorId: "sensor123",
        value: Math.random() * 100, // Example sensor value
      };
      call.write(sensorData);
    }, 1000 / currentRate);

    call.on('cancelled', () => {
      console.log('Call cancelled');
      clearInterval(intervalId)
    })
  },
});

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  console.log('Server running at http://0.0.0.0:50051');
  server.start();
});
