// $('#one').click(function(){
//     // console.log(document.querySelector("#display").value)
//     document.querySelector("#display").value = document.querySelector("#display").value + 1
// })

// $('#two').click(function(){
//     document.querySelector("#display").value = document.querySelector("#display").value + 2
// })

// $('#three').click(function(){
//     document.querySelector("#display").value = document.querySelector("#display").value + 3
// })

// $('#two').click(function(){
//     document.querySelector("#display").value = document.querySelector("#display").value + 2
// })

// $('#two').click(function(){
//     document.querySelector("#display").value = document.querySelector("#display").value + 2
// })

// $('#two').click(function(){
//     document.querySelector("#display").value = document.querySelector("#display").value + 2
// })

// $('#two').click(function(){
//     document.querySelector("#display").value = document.querySelector("#display").value + 2
// })

// $('#two').click(function(){
//     document.querySelector("#display").value = document.querySelector("#display").value + 2
// })






const inputs = $('.buttons .input');
// console.log(inputs)

for(let input of inputs){
    input.addEventListener('click', function(){
        // console.log(input.value)
        document.querySelector("#display").value = document.querySelector("#display").value + input.value
    })
}

$('#equal').click(function(){
    console.log(eval($('#display').val()))
        $('#display').val(eval($('#display').val()))

})

$('#clear').click(function(){
// function to Clear Input
  $('#display').val("")
})

