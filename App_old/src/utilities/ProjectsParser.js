const parseData = (data) => {

    let projects = []

    for (let i=0; i<data.length; i++){

        let node = data[i];

        let project = {}

        project.name = node.name;
        project.description = node.description;
        project.year = node.year;
        project.link = node.link;

        // extract tech stack
        project.tech_stack = node.tech_stack.substring(1, node.tech_stack.length-1).split(",");

        // extract other_contributors
        let other_contributors = node.other_contributors.substring(1, node.other_contributors.length-1).split("#");
        let n_contributors;
        for (n_contributors=0; n_contributors<other_contributors.length; n_contributors++){
            if (other_contributors[n_contributors] === ""){
                other_contributors = {}
                break
            } else{
                let obj = other_contributors[n_contributors].replace(/\$/g,'"')
                other_contributors[n_contributors] = JSON.parse(obj);
            }
        }
        project.other_contributors = other_contributors;

        projects.push(project);
    }

    return projects;
}

module.exports = parseData;