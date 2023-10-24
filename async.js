
///Part 2
let base = "http://numbersapi.com/1,2,3,4" 
let firstPromise = axios.get(base);
firstPromise.then(res => {
    console.log(res)
    console.log(res.data)
    numbers = res.data
    for(let item in numbers){
        favInfo = (numbers[item])
        newLi = $("<li>")
        $("#favNumbers").append(newLi)
        newLi.text(favInfo)
    } 
}).firstPromise.catch(err => console.log('ERROR'), err)


///Part 3
let base2 = "http://numbersapi.com/13?random&min=4&max=10"
let secondPromise = axios.get(base2);
secondPromise.then(res => {
    console.log(res)
    console.log(res.data)
    numbers = res.data   
        favInfo = (numbers)
        newLi = $("<li>")
        $("#favNumbers").append(newLi)
        newLi.text(favInfo)
})
secondPromise.then(res => {
    console.log(res)
    console.log(res.data)
        favInfo = (res.data )
        newLi = $("<li>")
        $("#favNumbers").append(newLi)
        newLi.text(favInfo)
})
secondPromise.then(res => {
    console.log(res)
    console.log(res.data)
    numbers = res.data   
        favInfo = (numbers)
        newLi = $("<li>")
        $("#favNumbers").append(newLi)
        newLi.text(favInfo)
})
secondPromise.then(res => {
    console.log(res)
    console.log(res.data)
    numbers = res.data   
        favInfo = (numbers)
        newLi = $("<li>")
        $("#favNumbers").append(newLi)
        newLi.text(favInfo)
})



/// Part One of the assignment 
$.getJSON("http://numbersapi.com/random/year?json", response =>{
    number = response
    console.log(number)
})


