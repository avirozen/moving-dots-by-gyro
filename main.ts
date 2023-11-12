input.onGesture(Gesture.LogoUp, function () {
    led.toggle(x, y)
    y += 1
    led.toggle(x, y)
})
input.onGesture(Gesture.TiltLeft, function () {
    led.toggle(x, y)
    x += -1
    led.toggle(x, y)
})
input.onGesture(Gesture.TiltRight, function () {
    led.toggle(x, y)
    x += 1
    led.toggle(x, y)
})
input.onGesture(Gesture.LogoDown, function () {
    led.toggle(x, y)
    y += -1
    led.toggle(x, y)
})
let y = 0
let x = 0
x = 2
y = 2
led.toggle(x, y)
