import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem, ipsum dolor sit amet</span>
        <hr />
        <span className="postDate"> 1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas
        accusantium corrupti tempore distinctio, tenetur quasi recusandae soluta
        similique praesentium minus doloribus, odio molestias quo autem
        obcaecati cumque saepe illum? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dicta quas accusantium corrupti tempore distinctio,
        tenetur quasi recusandae soluta similique praesentium minus doloribus,
        odio molestias quo autem obcaecati cumque saepe illum?
      </p>
    </div>
  );
};

export default Post;
