const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Paddle {
    constructor({position}) {
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

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    paddle1.update()
    paddle2.update()
};

animate()

addEventListener('keydown', (event) => {
    switch (event.key) {
        // [go up]
        case 'w':
            paddle1.velocity.y = -1
            break

        // [go down]
        case 's':
            paddle1.velocity.y = 1
            break

        // [go up]
        case 'ArrowUp':
            paddle2.velocity.y = -1
            break

        // [go down]
        case 'ArrowDown':
            paddle2.velocity.y = 1
            break
    }
});
