const Name = 'Ravi';
const greeting = 'Good Morning';
// console.log(greeting + ' ' + Name);

let html ;
html = '<h1>This is heading </h1>'+
            '<p>This is my para</p>';

// console.log(html);
html = html.concat(' this',' str2',' 2dftre');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);

// console.log(html[1]);
// console.log(html.indexOf('This'));
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(5));
// console.log(html.endsWith('egffgv'));
// console.log(html.includes('ft'));
// console.log(html.substring(0,5));
// console.log(html.slice(-16));
// console.log(html.split(' '));


let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${Name}
            <h1>This is heading</h1>
            <p> You like ${fruit1} and ${fruit2}`;

// document.body.innerHTML = myHtml;
{
    let name = 'Ravi chaudhary';
    let college = 'Lloyd Institue of Engineering and Technology';
    let course = 'B.Tech';
    let Intro = `<b>${name}</b> <br> ${course} <br> ${college} <br>`;

    document.body.innerHTML = Intro;

}