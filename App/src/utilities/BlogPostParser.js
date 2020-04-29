const parseData = (data) => {
    for (let i=0; i<data.length; i++){
        let node = data[i];

        // extract tech stack
        let tech_stack = node.tech_stack.substring(1, node.tech_stack.length-1).split(",");
        node.tech_stack = tech_stack;

        // extract other_contributors
        let other_contributors = node.other_contributors.substring(1, node.other_contributors.length-1).split("#");
        for (let j=0; j<other_contributors.length; j++){
            if (other_contributors[j] === ""){
                other_contributors[j] = {}
            } else{
                let obj = other_contributors[j].replace(/\$/g,'"')
                other_contributors[j] = JSON.parse(obj)
            }
        }
        node.other_contributors = other_contributors;
    }
}

module.exports = parseData;