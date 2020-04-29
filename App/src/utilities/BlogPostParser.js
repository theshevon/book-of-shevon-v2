const parseData = (data) => {

    let blogData = []

    for (let i=0; i<data.length; i++){

        let node = data[i];

        let blogPost = {}

        blogPost.name = node.name;
        blogPost.description = node.description;
        blogPost.img_src = node.img_src;

        // extract tech stack
        blogPost.tech_stack = node.tech_stack.substring(1, node.tech_stack.length-1).split(",");

        // extract other_contributors
        let other_contributors = node.other_contributors.substring(1, node.other_contributors.length-1).split("#");
        for (let j=0; j<other_contributors.length; j++){
            if (other_contributors[j] === ""){
                other_contributors = {}
                break
            } else{
                let obj = other_contributors[j].replace(/\$/g,'"')
                other_contributors[j] = JSON.parse(obj)
            }
        }
        blogPost.other_contributors = other_contributors;
        console.log(blogPost)
        blogData.push(blogPost);
    }

    return blogData;
}

module.exports = parseData;