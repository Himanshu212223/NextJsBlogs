"use server"
import fs from 'fs';
import path from 'path';


export const getBlogs = async () => {
    let userspath = path.join(process.cwd(), './src/Data/blogs.json');
    // let blog = fs.readFileSync('./src/Data/blogs.json', { encoding: 'utf8' });
    let blog = fs.readFileSync(userspath, { encoding: 'utf8' });
    blog = JSON.parse(blog);
    return JSON.stringify(blog);
}


export const getBlog = async (fileName) => {
    try{
        // console.log('into try')
        let blog = fs.readFileSync(`./src/Data/${fileName}.json`, {encoding : 'utf8'});
        // console.log(blog);
        if(!blog){
            const notFound = [{
                "id" : "NotFound" ,
                "title" : "Error 404",
                "description" : "File Not Found."
            }]
            return JSON.stringify(JSON.parse(notFound));
        }
        let currentBlog = JSON.parse(blog);
        return JSON.stringify(currentBlog);
    }
    catch(error){
        const errMessage = {
            "id" : "NotFound" ,
            "title" : "Error 404",
            "description" : "File Not Found."
        }
        return JSON.stringify(errMessage);
    }
}