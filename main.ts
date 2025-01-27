input.onGesture(Gesture.ScreenUp, function () {
    game.addScore(1)
    basic.showNumber(game.score())
})
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
basic.showString("Welcome!")
music.stopAllSounds()
basic.pause(1000)
basic.showString("GO!")
music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 255, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
    	
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.tonePlayable(554, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showString("Player 1")
    }
})
