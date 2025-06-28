function customRendor(reactelement, container) {
    const domele = document.createElement(reactelement.type)
    domele.innerHTML = reactelement.childern 

    /*
    domele.setAttribute('href', reactelement.props.href)
    domele.setAttribute('target', reactelement.props.target)    

    container.appendChild(domele)   
*/


    for (const prop in reactelement.props) {
        if(prop==='childern') continue;
        domele.setAttribute(prop,reactelement.props[prop])
         
    }
    container.appendChild(domele) 
}

const reactelement={
    type:'a',
    props:{

        href:'https://www.google.com',
        target:'_blank',
    },
    childern:'Click to go google'
}

const maincontainer=document.querySelector('#root')

customRendor(reactelement,maincontainer)