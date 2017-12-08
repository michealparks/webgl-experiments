import tick from './frame.js'

function frame (timestamp) {
  tick()
  requestAnimationFrame(frame)
}

requestAnimationFrame(frame)
