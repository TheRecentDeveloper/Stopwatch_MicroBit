input.onButtonPressed(Button.A, function () {
    Start = input.runningTime()
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . . . #
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    if (Start != 0) {
        Vrijeme = Math.round((input.runningTime() - Start) / 1000)
        basic.clearScreen()
        basic.pause(500)
        basic.showNumber(Vrijeme)
        basic.pause(2000)
        Start = 0
    } else {
        basic.clearScreen()
        basic.pause(500)
        basic.showNumber(Vrijeme)
        basic.pause(2000)
    }
    basic.showLeds(`
        . # # # .
        # . # . #
        # . . . #
        # . . . #
        . # # # .
        `)
})
let Vrijeme = 0
let Start = 0
Start = 0
Vrijeme = 0
basic.showLeds(`
    . # # # .
    # . # . #
    # . . . #
    # . . . #
    . # # # .
    `)
