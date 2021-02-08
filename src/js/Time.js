class Time {
    constructor(name, time) {
        this.name = name;
        this.time = time;
        this.cell0 = document.querySelector(`.${name} .cell_0`);
        this.cell1 = document.querySelector(`.${name} .cell_1`);
        this.cell0.innerHTML = this.getRanks()[1];
        this.cell1.innerHTML = this.getRanks()[0];
    }

    getRanks() {
        const arr = String(this.time).split('').map(i => +i);
        
        if (arr.length === 1) {
            arr.push(this.time);
            arr[0] = 0;
            return arr
            
        }
        return arr
    }

    changeTime(duration) {
        this.time++;
        
        if (this.time == duration) {
            this.time = 0;
        }
        this.cell0.innerHTML = this.getRanks()[1];
        this.cell1.innerHTML = this.getRanks()[0];
    }

    runTime() {
        setInterval(() => {   
            this.changeTime(60);
            circles.forEach(item => item.classList.toggle('hidden'));
            if (this.time === 0) {
                minutes.changeTime(60);
                if (minutes.time === 0) {
                    hours.changeTime(24);
                }
            }
        }, 1000);
    }
} 
const minutes = new Time('minutes', new Date().getMinutes());
const hours = new Time('hours', new Date().getHours());
const seconds = new Time('seconds', new Date().getSeconds());   

seconds.runTime();

const circles = []

for (let i = 0; i < 4; i++) {
    circles.push(document.createElement('div'));
    circles[i].classList.add('circle');
}

circles.forEach((item, i) => (i == 0 || i == 2) ? item.classList.add('top') : item.classList.add('bottom'));

document.querySelector('.hours').append(circles[0]);
document.querySelector('.hours').append(circles[1]);
document.querySelector('.minutes').append(circles[2]);
document.querySelector('.minutes').append(circles[3]);
console.log(circles);