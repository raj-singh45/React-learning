const element = React.createElement("h1", {id:"first", className:"raj" ,style:{backgroundColor:"blue"}} , "hello world"); 
const element2 = React.createElement("h2",{id:"second", className:"raj" ,style:{backgroundColor:"red"}} ,"kaise ho sab log"); //yeh batata hai ki kya create karna hai

const div1 = React.createElement("div" ,{},[element,element2])
const Reactroot = ReactDOM.createRoot(document.getElementById('root')); //yeh batata hai ki kaha render karna hai
Reactroot.render(div1) ;