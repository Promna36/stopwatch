var hr = 0
var min = 0
var sec = 0
var milisecond = 0
var timeString = ""
var time = document.getElementById("time")
var startBtn = document.getElementById("start")
var pauseBtn = document.getElementById("pause")
var resetBtn = document.getElementById("reset")
var count
const counter = () => {
    startBtn.hidden = true
    pauseBtn.hidden = false
    count = setInterval(() => {
        if(startBtn.hidden == true){
            if(milisecond == 100){
                milisecond = 0
                sec++
            }else if(sec == 60){
                sec = 0
                min++
            }else if(min == 60){
                min = 0
                hr++
            }else{
                milisecond++
            }
            timeString = hr+":"+min+":"+sec+":"+milisecond
            time.innerText = timeString
        }else{

        }
    }, 10)
}
startBtn.addEventListener('click',counter)
const paused = () => {
    startBtn.hidden = false
    pauseBtn.hidden = true
    time.innerText = timeString
    clearInterval(count)
}
pauseBtn.addEventListener('click', paused)

resetBtn.addEventListener('click', () => {
    startBtn.hidden = false
    pauseBtn.hidden = true
    time.innerText = "0:0:0:0"
    hr = 0
    min = 0
    sec = 0
    milisecond = 0
    clearInterval(count)
})
