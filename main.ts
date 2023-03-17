/**
 * Set everything up for playback (and display play arrow on LEDs)
 */
/**
 * selectPlayerDevice()
 */
/**
 * setVolume()
 */
// Set the volume (0x00 to 0x1e)
function setVolume () {
    buffer.setNumber(NumberFormat.Int8LE, 0, 0x7e);
buffer.setNumber(NumberFormat.Int8LE, 1, 0x04);
buffer.setNumber(NumberFormat.Int8LE, 2, 0xAE);
buffer.setNumber(NumberFormat.Int8LE, 3, 0x01);
buffer.setNumber(NumberFormat.Int8LE, 4, buffer.getNumber(NumberFormat.Int8LE, 1) + buffer.getNumber(NumberFormat.Int8LE, 2) + buffer.getNumber(NumberFormat.Int8LE, 3));
buffer.setNumber(NumberFormat.Int8LE, 5, 0xEF);
buffer.setNumber(NumberFormat.Int8LE, 5, 0x00);
buffer.setNumber(NumberFormat.Int8LE, 6, 0x00);
buffer.setNumber(NumberFormat.Int8LE, 7, 0x00);
serial.writeBuffer(buffer)
    control.waitMicros(200000)
}
// repete tout
function repall () {
    buffer.setNumber(NumberFormat.Int8LE, 0, 0x7e);
buffer.setNumber(NumberFormat.Int8LE, 1, 0x04);
buffer.setNumber(NumberFormat.Int8LE, 2, 0xaf);
buffer.setNumber(NumberFormat.Int8LE, 3, 0x02);
buffer.setNumber(NumberFormat.Int8LE, 4, 0xb5);
buffer.setNumber(NumberFormat.Int8LE, 5, 0xef);
buffer.setNumber(NumberFormat.Int8LE, 6, 0x00);
buffer.setNumber(NumberFormat.Int8LE, 7, 0x00);
serial.writeBuffer(buffer)
    control.waitMicros(200000)
}
// When button A pressed, play
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    repall()
    setVolume()
    playTrack()
})
// play
function playTrack () {
    buffer.setNumber(NumberFormat.Int8LE, 0, 0x7e);
buffer.setNumber(NumberFormat.Int8LE, 1, 0x05);
buffer.setNumber(NumberFormat.Int8LE, 2, 0xa2);
buffer.setNumber(NumberFormat.Int8LE, 3, 0x00);
buffer.setNumber(NumberFormat.Int8LE, 4, 0x02);
buffer.setNumber(NumberFormat.Int8LE, 5, buffer.getNumber(NumberFormat.Int8LE, 1) + buffer.getNumber(NumberFormat.Int8LE, 2) + buffer.getNumber(NumberFormat.Int8LE, 3) + buffer.getNumber(NumberFormat.Int8LE, 4));
buffer.setNumber(NumberFormat.Int8LE, 6, 0xef);
buffer.setNumber(NumberFormat.Int8LE, 7, 0x00);
serial.writeBuffer(buffer)
    control.waitMicros(200000)
}
// When button A pressed, play
input.onButtonPressed(Button.B, function () {
    stoplecture()
    basic.clearScreen()
})
// stop
function stoplecture () {
    buffer.setNumber(NumberFormat.Int8LE, 0, 0x7e);
buffer.setNumber(NumberFormat.Int8LE, 1, 0x03);
buffer.setNumber(NumberFormat.Int8LE, 2, 0xab);
buffer.setNumber(NumberFormat.Int8LE, 3, 0xae);
buffer.setNumber(NumberFormat.Int8LE, 4, 0xef);
buffer.setNumber(NumberFormat.Int8LE, 5, 0x00);
buffer.setNumber(NumberFormat.Int8LE, 6, 0x00);
buffer.setNumber(NumberFormat.Int8LE, 7, 0x00);
serial.writeBuffer(buffer)
    control.waitMicros(200000)
}
let buffer = pins.createBuffer(8);
// Baud rate 9600, TX on P14, RX on P0
serial.redirect(
SerialPin.P14,
SerialPin.P0,
BaudRate.BaudRate9600
)
control.waitMicros(200000)
