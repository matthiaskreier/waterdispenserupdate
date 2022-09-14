let TOO_COLD = 0
let TOO_HOT = 1
let IN_RANGE = 2

let state: number = IN_RANGE
let temperature: number = 0

let strip = neopixel.create(DigitalPin.P1, 4, NeoPixelMode.RGB)
let range = strip.range(0, 4)

function updateSystem() {
    if (input.buttonIsPressed(Button.A)) {
        state = 0
    }
    else if(input.buttonIsPressed(Button.B)) {
        state = 1
    }
    else {
        state = 2
    }
    temperature = readTemperature()
}

function evaluateState(state: number) {

}
function reactToState(state: number) {
    if(state == TOO_COLD) {
        show_red()
    }
    else if(state == TOO_HOT) {
        show_blue()
    }
    else {
        show_green()
    }
}

function show_red() {
    strip.showColor(neopixel.rgb(255, 0, 0))
    strip.show()
}
function show_green() {
    strip.showColor(neopixel.rgb(0, 255, 0))
    strip.show()
}
function show_blue() {
    strip.showColor(neopixel.rgb(0, 0, 255))
    strip.show()
}
function readTemperature() {
    return pins.analogReadPin(AnalogPin.P0)
}

basic.forever(function () {
    updateSystem()
    //state = evaluateState(state)
    reactToState(state)
})


