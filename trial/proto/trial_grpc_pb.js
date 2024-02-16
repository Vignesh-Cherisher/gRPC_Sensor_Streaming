// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var trial_pb = require('./trial_pb.js');

function serialize_greet_GreetRequest(arg) {
  if (!(arg instanceof trial_pb.GreetRequest)) {
    throw new Error('Expected argument of type greet.GreetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetRequest(buffer_arg) {
  return trial_pb.GreetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_GreetResponse(arg) {
  if (!(arg instanceof trial_pb.GreetResponse)) {
    throw new Error('Expected argument of type greet.GreetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetResponse(buffer_arg) {
  return trial_pb.GreetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreetServiceService = exports.GreetServiceService = {
  greet: {
    path: '/greet.GreetService/Greet',
    requestStream: false,
    responseStream: false,
    requestType: trial_pb.GreetRequest,
    responseType: trial_pb.GreetResponse,
    requestSerialize: serialize_greet_GreetRequest,
    requestDeserialize: deserialize_greet_GreetRequest,
    responseSerialize: serialize_greet_GreetResponse,
    responseDeserialize: deserialize_greet_GreetResponse,
  },
  greetManyTimes: {
    path: '/greet.GreetService/GreetManyTimes',
    requestStream: false,
    responseStream: true,
    requestType: trial_pb.GreetRequest,
    responseType: trial_pb.GreetResponse,
    requestSerialize: serialize_greet_GreetRequest,
    requestDeserialize: deserialize_greet_GreetRequest,
    responseSerialize: serialize_greet_GreetResponse,
    responseDeserialize: deserialize_greet_GreetResponse,
  },
  longGreet: {
    path: '/greet.GreetService/LongGreet',
    requestStream: true,
    responseStream: false,
    requestType: trial_pb.GreetRequest,
    responseType: trial_pb.GreetResponse,
    requestSerialize: serialize_greet_GreetRequest,
    requestDeserialize: deserialize_greet_GreetRequest,
    responseSerialize: serialize_greet_GreetResponse,
    responseDeserialize: deserialize_greet_GreetResponse,
  },
  greetEveryone: {
    path: '/greet.GreetService/GreetEveryone',
    requestStream: true,
    responseStream: true,
    requestType: trial_pb.GreetRequest,
    responseType: trial_pb.GreetResponse,
    requestSerialize: serialize_greet_GreetRequest,
    requestDeserialize: deserialize_greet_GreetRequest,
    responseSerialize: serialize_greet_GreetResponse,
    responseDeserialize: deserialize_greet_GreetResponse,
  },
  greetWithDeadline: {
    path: '/greet.GreetService/GreetWithDeadline',
    requestStream: false,
    responseStream: false,
    requestType: trial_pb.GreetRequest,
    responseType: trial_pb.GreetResponse,
    requestSerialize: serialize_greet_GreetRequest,
    requestDeserialize: deserialize_greet_GreetRequest,
    responseSerialize: serialize_greet_GreetResponse,
    responseDeserialize: deserialize_greet_GreetResponse,
  },
};

exports.GreetServiceClient = grpc.makeGenericClientConstructor(GreetServiceService);
