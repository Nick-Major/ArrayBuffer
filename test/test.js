import { getBuffer, ArrayBufferConverter } from "../src/app";

test ('loading data and converting to string test', () => {
    let converter = new ArrayBufferConverter();
    converter.load(getBuffer());
  
    expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
