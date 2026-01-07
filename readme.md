const element = React.createElement("h1", {id:"first", className:"raj" ,style:{backgroundColor:"blue"}} , "hello world"); 
const element2 = React.createElement("h2",{id:"second", className:"raj" ,style:{backgroundColor:"red"}} ,"kaise ho sab log");

const Reactroot = ReactDOM.createRoot(document.getElementById('root')); 
Reactroot.render(element); render Reactroot(div) me element ko append kr dega but us div ke sare element ko CLEAN  krke , jo element append hua hai usko daldega

Reactroot.render(element);
Reactroot.render(element2);
output me element 2 ka content dega element 1 ko clean krke 

to resolve this problem we have to create a separate div1 and put elemnet in it in the form of array
and now render directly append this single div1 into root i.e.. Reactroot


