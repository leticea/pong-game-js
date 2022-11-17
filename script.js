const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

class Paddle {
    constructor({position}) {
        this.position = position
        this.velocity = {
            x: 0,
            y: 0
        }
    }

    draw() {
        c.fillRect(this.position.x, this.position.y)
    }
}

c.fillStyle = 'red';
c.fillRect(0, 0, 100, 100)