// Document elements
var cs // currentScore
var hs // highScore
var cv // canvas
var ctx // context
var db // debug

// TODO: Check if this can be read somehow
var gameWidth
var gameHeight

// Radius used for the player and target
var radius

var targetFillStyle = 'orange'
var targetStrokeStyle = 'green'

var playerFillStyle = 'blue'
var playerStrokeStyle = 'blue'

class Baddy {
    constructor(xpos, ypos, xdir, ydir, rad = radius/3) {
        this.x = xpos
        this.y = ypos
        this.dx = xdir
        this.dy = ydir
        this.speed = 0.5
    
        this.radius = rad
    }
    
    draw() {
        ctx.fillStyle = Baddy.fillStyle
        ctx.strokeStyle = Baddy.strokeStyle

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true)
        ctx.fill()
        ctx.stroke()
    }
    
    move() {
        this.x += this.speed * this.dx
        if (this.x < 0) {
            this.dx = -this.dx
            this.x = -this.x
        } else if (this.x > gameWidth) {
            this.dx = -this.dx
            this.x = 2 * gameWidth - this.x
        }
        
        this.y += this.speed * this.dy
        if (this.y < 0) {
            this.dy = -this.dy
            this.y = -this.y
        } else if (this.y > gameHeight) {
            this.dy = -this.dy
            this.y = 2 * gameHeight - this.y
        }
    }
    
    checkCollision(x, y, radius) {
        var dist = Math.sqrt(
            Math.pow(Math.abs(x - this.x), 2) +
            Math.pow(Math.abs(y - this.y), 2))
        
        return (dist < (radius + this.radius))
    }
    
    static addBaddy() {
        var pos = randomPosition()
        var dir = randomDirection()

        Baddy.baddies.push(new Baddy(pos[0], pos[1], dir[0], dir[1]))
    }

    static killBaddies() {
        Baddy.baddies = []
    }

    static drawBaddies() {
        for (var baddy in Baddy.baddies) {
            Baddy.baddies[baddy].draw()
        }
    }
    static moveBaddies() {
        for (var baddy in Baddy.baddies) {
            Baddy.baddies[baddy].move()
        }
    }
    static checkCollisions(x, y, radius) {
        for (var baddy in Baddy.baddies) {
            if (Baddy.baddies[baddy].checkCollision(x, y, radius))
                return true
        }
        return false
    }	
}
Baddy.fillStyle = 'red'
Baddy.strokeStyle = 'white'

function init() {
    cs = document.getElementById('curscore')
    hs = document.getElementById('highscore')
    cv = document.getElementById('intersect')
    ctx = cv.getContext('2d')
    ctx.lineJoin = 'round'
    
    window.onmousemove = processMouseMove
    window.onkeydown = processKey
    cv.onclick = processMouseClick

    //TODO: load high score
    highScore = 0
    hs.innerHTML = highScore
    
    gameWidth = cv.width
    gameHeight = cv.height
    radius = gameWidth / 12
    
    resetGame()
}

function update() {
    if (gameOver) {
        drawGameOver()
        return
    }
    
    window.requestAnimationFrame(update)

    Baddy.moveBaddies()
    if (Baddy.checkCollisions(playerPosition[0], playerPosition[1], radius)) {
        gameOver = true
    }
    
    if (checkTargetCollision()) {
        increaseScore()
        newTarget()
        Baddy.addBaddy()
    }
        
    draw()
}

function draw() {
    ctx.clearRect(0, 0, gameWidth, gameHeight)
    
    drawTarget()
    drawPlayer()
    Baddy.drawBaddies()
    
//	ctx.strokeStyle = 'white'
//	ctx.beginPath()
//	ctx.moveTo(playerPosition[0], playerPosition[1])
//	ctx.lineTo(targetPosition[0], targetPosition[1])
//	ctx.stroke()
//	ctx.closePath()
}
function processMouseMove(event) {
    var mousex = event.clientX - cv.offsetLeft
    var mousey = event.clientY - cv.offsetTop
    
    if (mousex >= 0 && mousex < gameWidth &&
        mousey >= 0 && mousey < gameHeight)
        playerPosition = [mousex, mousey]
}

function processMouseClick(event) {
    if (gameOver) {
        resetGame()
    }
}

function processKey(event) {
    if (gameOver && event.code == 'Space') {
        resetGame()
    }
}


function drawGameOver() {
    ctx.fillStyle = 'white'
    ctx.font = '64px Shadows Into Light'
    ctx.textAlign = 'center'
    ctx.strokeText('Game Over', gameWidth/2, gameWidth/2 - 30)
    ctx.font = '24px Comfortaa'
    ctx.fillText('Click or press space to play again', gameWidth/2, gameWidth/2 + 30)
}

function resetGame() {
    resetScore()
    
    playerPosition = [-50, -50]
    
    newTarget()
    Baddy.killBaddies()
    
    gameOver = false

    update()
}

function resetScore() {
    currentScore = 0
    cs.innerHTML = currentScore
}

function increaseScore() {
    currentScore += 1
    cs.innerHTML = currentScore

    checkHighScore()
}

function checkHighScore() {
    if (currentScore > highScore) {
        highScore = currentScore
        hs.innerHTML = highScore
    }
}

function randomPosition(xmax = gameWidth,
                        ymax = gameHeight) {
    var position = [Math.floor(Math.random() * xmax),
            Math.floor(Math.random() * ymax)]
            
    if (Math.sqrt(
        Math.pow(Math.abs(playerPosition[0] - position[0]), 2) +
        Math.pow(Math.abs(playerPosition[1] - position[1]), 2)) < 2 * radius)
    {
        return randomPosition()
    } else {
        return position
    }
}

function randomDirection() {
    return [(Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10]
}

function newTarget() {
    targetPosition = randomPosition()
}

function drawTarget() {
    var xpos = targetPosition[0]
    var ypos = targetPosition[1]

    ctx.fillStyle = targetFillStyle
    ctx.strokeStyle = targetStrokeStyle
    ctx.fillRect(xpos - radius, ypos - radius, 2*radius, 2*radius)
    ctx.strokeRect(xpos - radius, ypos - radius, 2*radius, 2*radius)
}

function angleRound(angle, limit) {
    var newAngle = Math.abs(angle) - 
        limit * Math.floor(Math.abs(angle)/limit)
    
    if (Math.floor(Math.abs(angle) / limit) % 2 == 0) {
        return newAngle
    } else {
        return limit - newAngle
    }
}

function checkTargetCollision() {
    var dist = Math.sqrt(
        Math.pow(playerPosition[0] - targetPosition[0], 2) +
        Math.pow(playerPosition[1] - targetPosition[1], 2))

    if (dist < (1 + Math.sqrt(2)) * radius) {
        var angle = Math.atan2(targetPosition[0] - playerPosition[0],
                              targetPosition[1] - playerPosition[1])

        var calcRadius = Math.sqrt(Math.pow(radius, 2) +
            Math.pow(Math.tan(angleRound(angle, Math.PI/4)) * radius, 2))
            
    //	hitX = targetPosition[0] - calcRadius * Math.sin(angle)
    //	hitY = targetPosition[1] - calcRadius * Math.cos(angle)
            
        return (calcRadius + radius > dist)
    }
    
    return false
}

function drawPlayer() {
    var xpos = playerPosition[0]
    var ypos = playerPosition[1]
    
    ctx.fillStyle = playerFillStyle
    ctx.strokeStyle = playerStrokeStyle
    
    ctx.beginPath()
    ctx.arc(xpos, ypos, radius, 0, 2*Math.PI, true)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}
