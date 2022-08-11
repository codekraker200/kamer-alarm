input.onPinReleased(TouchPin.P2, function () {
    while (alarm == true) {
        music.playMelody("C D E F G A B C5 ", 1200)
    }
})
input.onButtonPressed(Button.A, function () {
    while (alarm == true) {
        basic.showString("alarm aan")
        // om het alarm 10 seconden te stoppen
        basic.pause(10000)
    }
    while (alarm == false) {
        basic.showString("alarm uit")
        // om het alarm 10 seconden te stoppen
        basic.pause(10000)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (alarm == true) {
        alarm = false
    } else {
        basic.showIcon(IconNames.Yes)
        basic.pause(5000)
        alarm = true
    }
})
let alarm = false
alarm = false
basic.forever(function () {
    while (alarm == true) {
        basic.showIcon(IconNames.Skull)
    }
})
