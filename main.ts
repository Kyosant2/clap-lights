input.onSound(DetectedSound.Loud, function () {
    lo = !(lo)
    if (lo) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.clearScreen()
    }
})
let lo = false
input.setSoundThreshold(SoundThreshold.Loud, 60)
basic.forever(function () {
	
})
