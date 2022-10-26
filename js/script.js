"use strict";
const h2React =
    <div>
        Học React
        <ul>
            <li>
                JAVA
            </li>

            <li>
                React
            </li>

            <li>
                Node
            </li>
        </ul>
    </div>

const root = document.getElementById('root');

const croot = ReactDOM.createRoot(root);

croot.render(h2React);