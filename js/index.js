const loadItem = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
    const data = await res.json()
    const video = data.data
    displayItem(video)
}

const displayItem = (videos) => {
    const item = document.getElementById('video-container');
    videos.forEach(video => {
        console.log(video)
        const newDiv = document.createElement('div');
        newDiv.classList = `card bg-base-100 shadow-xl ml-2`
        newDiv.innerHTML = `
            <figure><img src=${video.thumbnail} /></figure>
            <div class="flex my-2">
                <img class="w-[40px] h-[40px] rounded-full mx-4" src=${video.authors[0].profile_picture} />
                <div>
                    <h2 class="card-title">${video.title}</h2>
                    <p>${video.authors[0].profile_name}</p>
                    <p>${video.others.views}</p>
                </div>
            </div>
        `
        item.appendChild(newDiv);
    })

}
loadItem()