import { createServer } from 'miragejs'

function mockServer() {
    let server = createServer(
        {
            routes() {
                this.urlPrefix = "http://www.testdomain.com";
                this.namespace = "/v1/api";
                this.timing = 5000 //mennyit kelljen varni
                
                this.get("books", () => {
                    return [
                        {title: "Harry Potter and the Philiosophers Stone ", author: "J.K. Rowling", year: 2001},
                        {title: "Harry Potter and the Chamber of Secrets ", author: "J.K. Rowling", year: 2002},
                        {title: "Harry Potter and the Prisoner of Askaban ", author: "J.K. Rowling", year: 2004}
                        
                    ]
                }) 
                
            }
        }
    )
    return server
}

export default mockServer