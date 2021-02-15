// "Count" decreases by 1 when A is pressed
input.onButtonPressed(Button.A, function () {
    Count += -1
})
// "Count" increases by 1 when B is pressed
input.onButtonPressed(Button.B, function () {
    Count += 1
})
function Green () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function White () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 1023)
}
function Blue () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1023)
}
function Red () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
}
// "Count" keps track on how many times we pressed A and B
let Count = 1000
let Mode = 0
basic.forever(function () {
    // "Mode" indicates how the LED is going to behave.  It´s the remainder of "Count"/4, as an absolute number so it´s always positive.
    // Count 0, Mode 0
    // Count 1, Mode 1
    // ...
    // Count 4, Mode 0
    // Count 5, Mode 1
    // ....
    // Count 15, Mode 3
    // 
    Mode = Math.abs(Count % 4)
    // Mode 0, White light
    // Mode 1, Red light
    // Mode 2, Green light
    // Mode 3, Blue light
    if (Mode == 0) {
        White()
    } else if (Mode == 1) {
        Red()
    } else if (Mode == 2) {
        Green()
    } else if (Mode == 3) {
        Blue()
    }
})
