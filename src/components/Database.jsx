import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default class Database extends React.Component {
    state = {
        books: []
    }

    getAllBooks() {
        axios.get('/api/books').then(res => {
            console.log(res.data)
            this.setState({
                books: res.data
            })
        })
    }

    neilBooks(){
        axios.post(`/api/books`, ['Terry Pratchett']).then(res => {
            this.setState({
                books: res.data
            })
        })
    }

    terryBooks(){
        axios.post(`/api/books`, ['Neil Gaiman']).then(res => {
            this.setState({
                books: res.data
            })
        })
    }

    render() {
        const Container = styled.div`
        `
        const Book = styled.img`
        height: 350px
        margin: 5px
        `
        return (
            <div>
                <h1>Database</h1>
                <h2>Many to Many Relationship: Books and Authors</h2>
                <button
                    onClick={() => this.getAllBooks()}
                >get all books</button>
                <Container>
                    {this.state.books.map(book => {
                        return <Book src={book.cover} alt={book.title} key={book.id} />
                    })}
                </Container>
                <br />
                <h2>Statements: Subqueries</h2>
                <button
                onClick={()=> this.terryBooks()}
                >books by Terry Pratchett</button>
                <button
                onClick={() => this.neilBooks()}
                >books by Neil Gaiman</button>
            </div>
        )
    }
}

