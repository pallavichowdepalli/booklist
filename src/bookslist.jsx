import React from "react";
import {books} from "../src/data/books"
import ButtonGroup from "./components/buttons/buttonGroup";

const Booklist = () => {
    return (
        <div style={{display:'flex' }}>
            {
                books.map((book) => {
                    return (
                        <div>
                            <img src={book.img }  style={{width: '150px',height: '100px', justifyContent: 'space-around'}} />
                            <h3>{book.title}</h3>

                            <p>{book.author}</p>
                            <ButtonGroup title={book.title}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Booklist