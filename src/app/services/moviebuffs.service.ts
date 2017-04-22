import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MBService{
    http:any;
    baseUrl: String;

constructor(http:Http){
    this.http = http;
    this.baseUrl = 'https://api.themoviedb.org/3/';
}
getNowplaying(){
    return this.http.get(this.baseUrl+'movie/now_playing?api_key=8c9ba774510fc41113f2a633e881d8ab&language=en-US&page=1&region=US')
    .map(res => res.json());
}
getComingsoon(){
     return this.http.get(this.baseUrl+'movie/upcoming?api_key=8c9ba774510fc41113f2a633e881d8ab&language=en-US&page=1&region=US')
    .map(res => res.json());
}
getAiringToday(){
     return this.http.get(this.baseUrl+'tv/airing_today?api_key=8c9ba774510fc41113f2a633e881d8ab&language=en-US')
    .map(res => res.json());
}
getPopularShows(){
     return this.http.get(this.baseUrl+'tv/popular?api_key=8c9ba774510fc41113f2a633e881d8ab&language=en-US')
    .map(res => res.json());
}
getTopRatedShows(){
     return this.http.get(this.baseUrl+'tv/top_rated?api_key=8c9ba774510fc41113f2a633e881d8ab&language=en-US')
    .map(res => res.json());
}
getPopularCelebs(){
     return this.http.get(this.baseUrl+'person/popular?api_key=8c9ba774510fc41113f2a633e881d8ab&language=en-US&page=1')
    .map(res => res.json());
}
getMovieDetails(id){
     return this.http.get(this.baseUrl+'movie/'+ id +'?api_key=8c9ba774510fc41113f2a633e881d8ab&language=en-US')
    .map(res => res.json());
}
getMovieCastDetails(id){
     return this.http.get(this.baseUrl+'movie/'+ id +'/credits?api_key=8c9ba774510fc41113f2a633e881d8ab')
    .map(res => res.json());
}
getMovieGallery(id){
     return this.http.get(this.baseUrl+'movie/'+ id +'/images?api_key=8c9ba774510fc41113f2a633e881d8ab')
    .map(res => res.json());
}
getMovieVideo(id){
     return this.http.get(this.baseUrl+'movie/'+id+'/videos?api_key=8c9ba774510fc41113f2a633e881d8ab')
    .map(res => res.json());
}
getMovieSimilar(id){
     return this.http.get(this.baseUrl+'movie/'+ id +'/similar?api_key=8c9ba774510fc41113f2a633e881d8ab&language=en-US')
    .map(res => res.json());
}
getTvDetails(id){
     return this.http.get(this.baseUrl+'tv/'+ id +'?api_key=8c9ba774510fc41113f2a633e881d8ab&language=en-US')
    .map(res => res.json());
}
getTvCastDetails(id){
     return this.http.get(this.baseUrl+'tv/'+ id +'/credits?api_key=8c9ba774510fc41113f2a633e881d8ab&language=en-US')
    .map(res => res.json());
}
getTvGallery(id){
     return this.http.get(this.baseUrl+'tv/'+ id +'/images?api_key=8c9ba774510fc41113f2a633e881d8ab')
    .map(res => res.json());
}
getTvSimilar(id){
     return this.http.get(this.baseUrl+'tv/'+ id +'/similar?api_key=8c9ba774510fc41113f2a633e881d8ab&language=en-US&page=1')
    .map(res => res.json());
}
getCelebDetails(id){
     return this.http.get(this.baseUrl+'person/'+ id + '?api_key=8c9ba774510fc41113f2a633e881d8ab&language=en-US')
    .map(res => res.json());
}
getCelebMovieDetails(id){
     return this.http.get(this.baseUrl+'person/'+ id +'/movie_credits?api_key=8c9ba774510fc41113f2a633e881d8ab&language=en-US')
    .map(res => res.json());
}
getCelebGallery(id){
     return this.http.get(this.baseUrl+'person/'+ id +'/images?api_key=8c9ba774510fc41113f2a633e881d8ab')
    .map(res => res.json());
}
getCelebTvDetails(id){
     return this.http.get(this.baseUrl+'person/'+ id +'/tv_credits?api_key=8c9ba774510fc41113f2a633e881d8ab&language=en-US')
    .map(res => res.json());
}
getSearch(SearchQ){
     return this.http.get(this.baseUrl+'search/movie?api_key=8c9ba774510fc41113f2a633e881d8ab&language=en-US&query='+SearchQ)
    .map(res => res.json());
}
getSearchTv(SearchQ){
     return this.http.get(this.baseUrl+'search/tv?api_key=8c9ba774510fc41113f2a633e881d8ab&language=en-US&query='+SearchQ+'&page=1')
    .map(res => res.json());
}
getSearchCeleb(SearchQ){
     return this.http.get(this.baseUrl+'search/person?api_key=8c9ba774510fc41113f2a633e881d8ab&language=en-US&query='+ SearchQ +'&page=1&include_adult=true')
    .map(res => res.json());
}
}