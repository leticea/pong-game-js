const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Paddle {
    constructor({ position }) {
        this.position = position
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 10
        this.height = 100
    }

    draw() {
        c.fillStyle = 'white',
        c.fillRect(
            this.position.x, 
            this.position.y,
            this.width,
            this.height)
    }

    update() {
        this.draw()

        if (this.position.y + this.velocity.y > 0 && this.position.y + this.height + this.velocity.y < canvas.height)
        this.position.y += this.velocity.y
    }
};

class Ball {
    constructor({ position }) {
        this.position = position

        const direction = {
            x: Math.random() - 0.5 >= 0 ? 5 : 7,
            y: Math.random() - 0.5 >= 0 ? 5 : 7,
        }

        this.velocity = {
            x: direction.x,
            y: direction.y
        }
        this.width = 20
        this.height = 20
    }

    draw() {
        c.fillStyle = 'white',
        c.fillRect(
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height)
    }

    update() {
        this.draw()

        const rightSide = this.position.x + this.width + this.velocity.x;
        const leftSide = this.position.x + this.velocity.x;
        const bottomSide = this.position.y + this.height;
        const topSide = this.position.y;

        if ((rightSide >= paddle2.position.x && bottomSide >= paddle2.position.y && topSide <= paddle2.position.y + paddle2.height) ||  leftSide <= 0) {

            this.velocity.x = -this.velocity.x
        }

        // [reverse y directions]
        if (this.position.y + this.height + this.velocity.y >= canvas.width || this.position.y + this.velocity.y <= 0) {

            this.velocity.y = -this.velocity.y
        }

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
};

const paddle1 = new Paddle({
    position: {
        x: 10,
        y: 100
    },
});

const paddle2 = new Paddle({
    position: {
        x: canvas.width - 10 * 2,
        y: 100
    },
});

const ball = new Ball({
    position: {
        x: canvas.width / 2,
        y: canvas.height / 2
    },
});

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    paddle1.update()
    paddle2.update()

    ball.update()
};

animate()

addEventListener('keydown', (event) => {

    const speed = 7;

    switch (event.key) {
        // [go up]
        case 'w':
            paddle1.velocity.y = -speed
            break

        // [go down]
        case 's':
            paddle1.velocity.y = speed
            break

        // [go up]
        case 'ArrowUp':
            paddle2.velocity.y = -speed
            break

        // [go down]
        case 'ArrowDown':
            paddle2.velocity.y = speed
            break
    }
});
