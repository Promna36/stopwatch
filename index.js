var hr = 0
var min = 0
var sec = 0
var milisecond = 0
var timeString = ""
var time = document.getElementById("time")
var startBtn = document.getElementById("start")
var pauseBtn = document.getElementById("pause")
const start = () => {
    startBtn.hidden = true
    pauseBtn.hidden = false
    setInterval(() => {
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
    }, 10)
}
const pause = () => {
    startBtn.hidden = false
    pauseBtn.hidden = true
    setInterval(() => {
        milisecond--
    }, 10)
}
const reset = () => {
    location.reload()
}