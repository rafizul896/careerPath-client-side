import { useLoaderData } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const BlogDetails = () => {
    const blog = useLoaderData();
    console.log(blog)
    const { blogImg, que, answer, writer, totalLikes, postDate } = blog
    return (
        <div className="max-w-2xl md:px-6 py-5 md:py-16 mx-auto space-y-12">
            <article className="space-y-8">
                <div>
                    <img src={blogImg} alt="" />
                </div>
                <div className="space-y-6">
                    <h1 className="text-2xl font-bold md:tracking-tight md:text-3xl">{que}</h1>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <img src={writer.img} alt="" className="w-10 h-10 rounded-full object-cover" />
                            <div>
                                <p className="text-lg font-medium">{writer.name}</p>
                                <p className="text-gray-700">{postDate}</p>
                            </div>
                        </div>
                        <p className="text-xl">{totalLikes} Likes</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 border-t border-dashed dark:border-gray-600"></div>
                <div className="dark:text-gray-800">
                    <p className="text-justify">{answer}</p>
                </div>
            </article>
            <div className="flex border-t border-gray-600"></div>
            <div className="flex justify-end">
                <button className="btn btn-active px-5 text-lg"><FaRegHeart />Like</button>
            </div>
        </div>
    );
};

export default BlogDetails;