const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '4fb7582b04ffdc34132d87358ccdf684',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;