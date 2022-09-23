
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=MBQIVyZotO0VqGcmCVqpRNVo6FxJ5ESv&q=${category}&limit=15`
    const resp = await fetch (url)
    const {data} = await resp.json()
    const gifs = data.map(img =>(
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }
    ))
    const title = gifs[0].title
    // console.log('Estos son los gifs', {gifs});
    // console.log('Gif 0',gifs[0].title);
    // console.log('Este es el title', title);
    return gifs;
}