// Using Pure JS
// function createElement(type,className,id){
//     const temp = document.createElement(type);
//     if(className) temp.className = className;
//     if(id) temp.id = id;
//     return temp;
// }
// const root = createElement('div',null,id='root');
// document.body.append(root);
// const container = createElement('div','container','container');
// root.append(container);
// const section = createElement('section');
// container.append(section);
// const p = createElement('p');
// p.innerText = 'The Libary for Web and Native user Interface';
// const img = createElement('img');
// img.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
// section.append(p);
// section.append(img);

// Using React Create Element
// const container = React.createElement(
//     'div',
//     { className: 'container', id: 'container' },
//     [
//         React.createElement('section', { key: 1 }, [
//             React.createElement('p', { key: 2 }, 'The Libary for Web and Native user Interface'),
//             React.createElement('img', { key: 3, src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" })
//         ])
//     ]
// )
// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(container);


//Create our Own React type Create Element
// function createElement(type, prop, children = []) {
//     const temp = document.createElement(type);
//     if (prop) {
//         for (const property in prop) {
//             if (prop[property]) temp[property] = prop[property];
//         }
//     }
//     if (children) {
//         for (const child of children) {
//             temp.append(child);
//         }
//     }
//     return temp;
// }


// const root = createElement('div', { id: 'root' });
// document.body.append(root);
// const container = createElement('div', { className: 'container', id: 'container' }, [
//     createElement('section', null, [
//         createElement(
//             'p',
//             { innerText: "The Libary for Web and Native user Interfac" }
//         ),
//         createElement(
//             'img',
//             { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" }
//         )
//     ])
// ]);
// root.append(container);