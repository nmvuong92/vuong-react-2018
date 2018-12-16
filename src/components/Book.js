import React,{Component} from 'react';
import {store} from '../store/store';
import * as book_ac from '../actions/bookAction';
export default class Book extends Component{
    componentDidMount(){
       store.dispatch(book_ac.getListBook());
    }
    render(){
        const state = store.getState();
        var books = state.bookReducer.books;
        return (
            <table>
                <thead>
                <tr>
                    <th>ISBN</th>
                    <th>TITLE</th>
                    <th>AUTHOR</th>
                    <th>PUSBLISER</th>
                    <th>PHOTO</th>
                    <td>Command</td>
                </tr>
                </thead>
                <tbody>
                  {books.map(function(item,i){
                      return(
                          <tr>
                              <td>{item.isbn}</td>
                              <td>{item.title}</td>
                              <td>{item.author}</td>
                              <td>{item.publisher}</td>
                              <td>
                                  <img src={item.photo}/>
                              </td>
                              <td>
                                  <button>Xóa</button>
                                  <button>Sửa</button>
                              </td>
                        
                          </tr>
                      );
                  })}

                </tbody>
            </table>
        );
    }
}