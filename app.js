$(document).ready(function() {
    
    //Fucntion to handle form submission
    $('#rate-movie').on('submit', function(e){
        e.preventDefault()
        let movie = $('#title').val()
        let rating = $('#rating').val()
        // Append a new list item to the unordered list
        $('ul').append("<li><b>" + movie + "   </b><i>Rating: " 
        + rating + "</i> <button class='remove-movie'>x</button></li>")
    })

    //Function to handle removing movie entries
    $('ul').on("click", '.remove-movie', function(e){
        e.preventDefault()
        $(this).closest('li').remove()
    })
})


// ## **Further Study**

// - Ensure that the rating of a movie can only be between 0 and 10.
// - Ensure that a title has at least 2 characters in it.
// - Allow users to sort alphabetically by the title of the movie or by the 
// rating of the movie from lowest to highest and vice versa.


