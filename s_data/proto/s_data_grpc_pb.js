// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var s_data_pb = require('./s_data_pb.js');

function serialize_sensor_SensorData(arg) {
  if (!(arg instanceof s_data_pb.SensorData)) {
    throw new Error('Expected argument of type sensor.SensorData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensor_SensorData(buffer_arg) {
  return s_data_pb.SensorData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sensor_StreamRequest(arg) {
  if (!(arg instanceof s_data_pb.StreamRequest)) {
    throw new Error('Expected argument of type sensor.StreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sensor_StreamRequest(buffer_arg) {
  return s_data_pb.StreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The sensor service definition.
var SensorServiceService = exports.SensorServiceService = {
  // Server streaming RPC
streamSensorData: {
    path: '/sensor.SensorService/StreamSensorData',
    requestStream: false,
    responseStream: true,
    requestType: s_data_pb.StreamRequest,
    responseType: s_data_pb.SensorData,
    requestSerialize: serialize_sensor_StreamRequest,
    requestDeserialize: deserialize_sensor_StreamRequest,
    responseSerialize: serialize_sensor_SensorData,
    responseDeserialize: deserialize_sensor_SensorData,
  },
};

exports.SensorServiceClient = grpc.makeGenericClientConstructor(SensorServiceService);
