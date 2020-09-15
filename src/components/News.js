import React, { Component } from 'react';
import "./News.css";
import DefaultThumb from './defaultThumb.png'
import NewsCard from './NewsCard';


export default class News extends Component {
    render() {
        if (this.props.isLoaded) {
            return (
                <div className="news mt-5">
                    {this.props.articles.map(article => (
                        (article.urlToImage)
                            ?
                            <NewsCard 
                            title={article.title} 
                            urlToImage={article.urlToImage} 
                            url={article.url}
                            publishedAt={article.publishedAt}
                            publisher={article.source.name}
                            />

                            :
                            <NewsCard 
                            title={article.title} 
                            urlToImage={DefaultThumb}
                            url={article.url}
                            publishedAt={article.publishedAt}
                            publisher={article.source.name}
                            />
                    ))}
                </div>
                
            );
        }
        else {
            return (
                <div className="news mt-5">
                     <div className="loader mx-auto"></div> 
                </div>  
            );
        }
        
    }
}