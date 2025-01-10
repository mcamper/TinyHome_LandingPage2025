document.querySelector('.btn').addEventListener('click', function() {
    let tiny_home_question = prompt("What's the one thing you could not live without in your home?");
    if(tiny_home_question && tiny_home_question.length) {
        alert(`If ${tiny_home_question} fits in a tiny home, it might just be perfect for you!`);
    } else {
        alert("Looks like you're undecided! Tiny homes may or may not be your thing.");
    }
    });