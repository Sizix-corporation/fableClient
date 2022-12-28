import Ably from "ably"

const ably = new Ably.Realtime.Promise("wE-BTQ.XwG9Gg:7N1BB1JaZ-TRpfPCyjaUY5V_srt27OkxzqC2dd679VM");
await ably.connection.once('connected');

const channel = ably.channels.get('quickstart');
await channel.subscribe('greeting', (message) => {
  // console.log('Received a greeting message in realtime: ' + message.data)
});