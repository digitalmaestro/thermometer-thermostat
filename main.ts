let Celsius = 0
let Fahrenheit = 0
input.onButtonPressed(Button.A, function () {
    Celsius = input.temperature()
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    Fahrenheit = input.temperature() * 1.8 + 32
    basic.showNumber(Fahrenheit)
})
basic.forever(function () {
    Fahrenheit = input.temperature() * 1.8 + 32
    if (Fahrenheit < 64) {
        basic.showIcon(IconNames.Sad)
    }
    if (Fahrenheit >= 64 && Fahrenheit <= 75) {
        basic.showIcon(IconNames.Happy)
    }
    if (Fahrenheit > 75) {
        basic.showIcon(IconNames.Angry)
    }
    basic.pause(5000)
    basic.clearScreen()
    basic.showNumber(Fahrenheit)
})
