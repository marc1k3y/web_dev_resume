import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import {pdfjs} from "react-pdf"
import {Provider} from "react-redux"
import {store} from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
