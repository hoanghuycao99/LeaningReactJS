const h2React = React.createElement(
    'div',
    { className: 'div-id' },
    React.createElement('h2', { title: 'hoc' }, 'child1'),
    React.createElement('p', null, 'child2'),
    React.createElement(
        'ul',
        {},
        React.createElement('li', {}, 'li1'),
        React.createElement('li', {}, 'li2'),
    )
);

const root = document.getElementById('root');

const croot = ReactDOM.createRoot(root);

croot.render(h2React);