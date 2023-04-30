const $gifContainer = $('#gifContainer');
const $searchInput = $("#search");

function addGif(res){
    let numResults = res.data.length;
    if (numResults) {
        let randomIdx = Math.floor(Math.random() *numResults);
        let randomUrl = res.data[randomIdx].url;
        let $newCol = $("<div>", {class: "gif"});
        let $newGif = $("<img>", {
            src: randomUrl
        });
            
        $newCol.append($newGif);
        $gifContainer.append($newCol);
    }

}

$('form').on("submit", async function(evt){
    evt.preventDefault();

    let searchTerm = $searchInput.val();
    $searchInput.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    addGif(response.data);
})

$('#remove').on("click", function(){
    $gifContainer.empty();
})