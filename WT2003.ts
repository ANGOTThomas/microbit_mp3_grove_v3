
namespace MP3 {
// repete tout
export function repall() {
    buffer.setNumber(NumberFormat.Int8LE, 0, 0x7e);
    buffer.setNumber(NumberFormat.Int8LE, 1, 0x04);
    buffer.setNumber(NumberFormat.Int8LE, 2, 0xaf);
    buffer.setNumber(NumberFormat.Int8LE, 3, 0x02);
    buffer.setNumber(NumberFormat.Int8LE, 4, 0xb5);
    buffer.setNumber(NumberFormat.Int8LE, 5, 0xef);
    serial.writeBuffer(buffer);
    control.waitMicros(200000);
}

export function setVolume(vol: number) {
    buffer.setNumber(NumberFormat.Int8LE, 0, 0x7e);
    buffer.setNumber(NumberFormat.Int8LE, 1, 0x04);
    buffer.setNumber(NumberFormat.Int8LE, 2, 0xae);
    buffer.setNumber(NumberFormat.Int8LE, 3, vol);
    buffer.setNumber(NumberFormat.Int8LE, 4, (buffer.getNumber(NumberFormat.Int8LE, 1) + buffer.getNumber(NumberFormat.Int8LE, 2) + buffer.getNumber(NumberFormat.Int8LE, 3)) & 0xFF);
    buffer.setNumber(NumberFormat.Int8LE, 5, 0xef);
    serial.writeBuffer(buffer);
    control.waitMicros(200000);
} 

// play
export function playTrack(piste: number) {
    buffer.setNumber(NumberFormat.Int8LE, 0, 0x7e);
    buffer.setNumber(NumberFormat.Int8LE, 1, 0x05);
    buffer.setNumber(NumberFormat.Int8LE, 2, 0xa2);
    buffer.setNumber(NumberFormat.Int8LE, 3, 0x00);
    buffer.setNumber(NumberFormat.Int8LE, 4, 0x01);
    buffer.setNumber(NumberFormat.Int8LE, 5, (buffer.getNumber(NumberFormat.Int8LE, 1) + buffer.getNumber(NumberFormat.Int8LE, 2) + buffer.getNumber(NumberFormat.Int8LE, 3) + buffer.getNumber(NumberFormat.Int8LE, 4)) & 0xFF);
    buffer.setNumber(NumberFormat.Int8LE, 6, 0xef);
    serial.writeBuffer(buffer);
    control.waitMicros(200000);
}
// repete 1
export function rep1() {
    buffer.setNumber(NumberFormat.Int8LE, 0, 0x7e);
    buffer.setNumber(NumberFormat.Int8LE, 1, 0x04);
    buffer.setNumber(NumberFormat.Int8LE, 2, 0xaf);
    buffer.setNumber(NumberFormat.Int8LE, 3, 0x01);
    buffer.setNumber(NumberFormat.Int8LE, 4, 0xb4);
    buffer.setNumber(NumberFormat.Int8LE, 5, 0xef);
    serial.writeBuffer(buffer);
    control.waitMicros(200000);
}
// repete rien
export function rep0() {
    buffer.setNumber(NumberFormat.Int8LE, 0, 0x7e);
    buffer.setNumber(NumberFormat.Int8LE, 1, 0x04);
    buffer.setNumber(NumberFormat.Int8LE, 2, 0xaf);
    buffer.setNumber(NumberFormat.Int8LE, 3, 0);
    buffer.setNumber(NumberFormat.Int8LE, 4, 0xb3);
    buffer.setNumber(NumberFormat.Int8LE, 5, 0xef);
    serial.writeBuffer(buffer);
    control.waitMicros(200000);
}
// random
export function aleatoire() {
    buffer.setNumber(NumberFormat.Int8LE, 0, 0x7e);
    buffer.setNumber(NumberFormat.Int8LE, 1, 0x04);
    buffer.setNumber(NumberFormat.Int8LE, 2, 0xaf);
    buffer.setNumber(NumberFormat.Int8LE, 3, 0x03);
    buffer.setNumber(NumberFormat.Int8LE, 4, 0xb6);
    buffer.setNumber(NumberFormat.Int8LE, 5, 0xef);
    serial.writeBuffer(buffer);
    control.waitMicros(200000);
}

// stop
export function stoplecture() {
    buffer.setNumber(NumberFormat.Int8LE, 0, 0x7e);
    buffer.setNumber(NumberFormat.Int8LE, 1, 0x03);
    buffer.setNumber(NumberFormat.Int8LE, 2, 0xab);
    buffer.setNumber(NumberFormat.Int8LE, 3, 0xae);
    buffer.setNumber(NumberFormat.Int8LE, 4, 0xef);
    serial.writeBuffer(buffer);
    control.waitMicros(200000);
}
}