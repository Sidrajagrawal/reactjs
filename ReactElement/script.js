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

function createElement(type, prop, children) {
    const temp = document.createElement(type);
    if (prop) {
        for (const property in prop) {
            if (prop[property]) temp[property] = prop[property];
        }
    }

    // if(children){
    //     document.children[parent].append(temp);
    // }
    return temp;
}
const root = createElement('div', { id: 'root' });
document.body.append(root);
const container = createElement('div', { className: 'container', id: 'container' }, { parent: root });
root.append(container);
const section = createElement('section');
container.append(section);
const p = createElement('p', { innerText: 'The Libary for Web and Native user Interface' });;
const img = createElement('img', { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' });
section.append(p);
section.append(img);